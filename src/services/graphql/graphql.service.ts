import {
  DefinitionNode,
  extendSchema,
  GraphQLArgument,
  GraphQLEnumType,
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNamedType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLUnionType,
  isRequiredArgument,
  isTypeExtensionNode,
  Kind,
  parse,
} from "../../../deps.ts";
import {
  GenerateResult,
  GraphQLParentType,
  GraphQLSchemaTypes,
} from "./graphql.type.ts";
import {
  ClassDef,
  ClassDefMethod,
  EnumTypeDef,
  FieldArrayElementTypeDef,
  FieldArrayTypeDef,
  FieldEnumTypeDef,
  FieldObjectTypeDef,
  FieldScalarTypeDef,
  FieldTypeDef,
  FieldTypes,
  FieldUnionTypeDef,
  ObjectTypeDef,
  ScalarTypeDef,
  TypeDef,
  Types,
  TypeScriptService,
  UnionTypeDef,
} from "../typescript/index.ts";
import {
  assertNever,
  getGraphQLTypeName,
  isGraphQLField,
  isGraphQLInputField,
  upperFirst,
} from "../../lib/index.ts";

/**
 * GraphQL Service.
 */
export class GraphQLService {
  private readonly typeScriptService: TypeScriptService;

  constructor() {
    this.typeScriptService = new TypeScriptService();
  }

  /**
   * Map GraphQL extension kind to GraphQL type definition kind.
   */
  private static readonly _extensionKindToDefinitionKind: Record<
    string,
    | Kind.SCALAR_TYPE_DEFINITION
    | Kind.OBJECT_TYPE_DEFINITION
    | Kind.INTERFACE_TYPE_DEFINITION
    | Kind.UNION_TYPE_DEFINITION
    | Kind.ENUM_TYPE_DEFINITION
    | Kind.INPUT_OBJECT_TYPE_DEFINITION
  > = {
    [Kind.SCALAR_TYPE_EXTENSION]: Kind.SCALAR_TYPE_DEFINITION,
    [Kind.OBJECT_TYPE_EXTENSION]: Kind.OBJECT_TYPE_DEFINITION,
    [Kind.INTERFACE_TYPE_EXTENSION]: Kind.INTERFACE_TYPE_DEFINITION,
    [Kind.UNION_TYPE_EXTENSION]: Kind.UNION_TYPE_DEFINITION,
    [Kind.ENUM_TYPE_EXTENSION]: Kind.ENUM_TYPE_DEFINITION,
    [Kind.INPUT_OBJECT_TYPE_EXTENSION]: Kind.INPUT_OBJECT_TYPE_DEFINITION,
  };

  /**
   * GraphQL Root type names.
   */
  public static readonly rootTypeNames = ["Query", "Mutation", "Subscription"];

  /**
   * Get stub types so we can account for any type definitions that are meant to be extended.
   */
  private _getStubTypes(
    schemaDefinitions: readonly DefinitionNode[],
  ): DefinitionNode[] {
    const definitions: DefinitionNode[] = [];
    for (const definition of schemaDefinitions) {
      if (isTypeExtensionNode(definition)) {
        const mappedDefinition: DefinitionNode = {
          kind: GraphQLService._extensionKindToDefinitionKind[definition.kind],
          name: definition.name,
        };
        definitions.push(mappedDefinition);
      }
    }
    return definitions;
  }

  /**
   * Indicates if a field is a field resolver.
   */
  private _isFieldResolver(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
  ): boolean {
    if (isGraphQLInputField(field)) {
      return false;
    }

    if (GraphQLService.rootTypeNames.includes(parent.name)) {
      return true;
    }

    if (isGraphQLField(field) && field?.args?.length > 0) {
      return true;
    }

    return false;
  }

  /**
   * Create shared GraphQL Field type definition.
   */
  private _createBaseFieldTypeDef(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
    nullable: boolean,
  ): Omit<FieldTypeDef, "type"> {
    const args: GraphQLArgument[] = isGraphQLField(field)
      ? Object.values(field.args ?? [])
      : [];
    const resolver = this._isFieldResolver(parent, field);
    return {
      name: field.name,
      typeName: getGraphQLTypeName(field.type),
      comment: field.description ?? undefined,
      args: args.map<FieldTypeDef>((arg) =>
        this._createFieldTypeDef(
          parent,
          arg,
          arg.type,
          !isRequiredArgument(arg),
        )
      ),
      argsInputName: `${upperFirst(parent.name)}${upperFirst(field.name)}Input`,
      parent: GraphQLService.rootTypeNames.includes(parent.name)
        ? undefined
        : parent.name,
      promise: resolver,
      resolver,
      nullable,
    };
  }

  /**
   * Create GraphQL Field Array Element type definition.
   */
  private _createFieldArrayElementTypeDef(
    type: GraphQLInputType | GraphQLOutputType,
    nullable = true,
  ): FieldArrayElementTypeDef {
    if (type instanceof GraphQLScalarType) {
      return {
        type: FieldTypes.SCALAR,
        nullable,
      };
    }

    if (
      type instanceof GraphQLObjectType ||
      type instanceof GraphQLInterfaceType ||
      type instanceof GraphQLInputObjectType
    ) {
      return {
        type: FieldTypes.OBJECT,
        nullable,
      };
    }

    if (type instanceof GraphQLUnionType) {
      return {
        type: FieldTypes.UNION,
        nullable,
      };
    }

    if (type instanceof GraphQLEnumType) {
      return {
        type: FieldTypes.OBJECT,
        nullable,
      };
    }

    if (type instanceof GraphQLList) {
      return this._createFieldArrayElementTypeDef(type.ofType);
    }

    if (type instanceof GraphQLNonNull) {
      return this._createFieldArrayElementTypeDef(type.ofType, false);
    } else {
      assertNever(type);
    }
  }

  /**
   * Create GraphQL Field Array type definition.
   */
  private _createFieldArrayTypeDef(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
    nullable: boolean,
  ): FieldArrayTypeDef {
    return {
      ...this._createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.ARRAY,
      element: this._createFieldArrayElementTypeDef(field.type),
    };
  }

  /**
   * Create GraphQL Field Scalar type definition.
   */
  private _createFieldScalarTypeDef(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
    nullable: boolean,
  ): FieldScalarTypeDef {
    return {
      ...this._createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.SCALAR,
    };
  }

  /**
   * Create GraphQL Field Object type definition.
   */
  private _createFieldObjectTypeDef(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
    nullable: boolean,
  ): FieldObjectTypeDef {
    return {
      ...this._createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.OBJECT,
    };
  }

  /**
   * Create GraphQL Field Union type definition.
   */
  private _createFieldUnionTypeDef(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
    nullable: boolean,
  ): FieldUnionTypeDef {
    return {
      ...this._createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.UNION,
    };
  }

  /**
   * Create GraphQL Field Enum type definition.
   */
  private _createFieldEnumTypeDef(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
    nullable: boolean,
  ): FieldEnumTypeDef {
    return {
      ...this._createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.ENUM,
    };
  }

  /**
   * Create GraphQL Field type definition.
   */
  private _createFieldTypeDef(
    parent: GraphQLParentType,
    // deno-lint-ignore no-explicit-any
    field: GraphQLField<any, any> | GraphQLArgument,
    type: GraphQLInputType | GraphQLOutputType,
    nullable = true,
  ): FieldTypeDef {
    if (type instanceof GraphQLScalarType) {
      return this._createFieldScalarTypeDef(parent, field, nullable);
    }

    if (
      type instanceof GraphQLObjectType ||
      type instanceof GraphQLInterfaceType ||
      type instanceof GraphQLInputObjectType
    ) {
      return this._createFieldObjectTypeDef(parent, field, nullable);
    }

    if (type instanceof GraphQLUnionType) {
      return this._createFieldUnionTypeDef(parent, field, nullable);
    }

    if (type instanceof GraphQLEnumType) {
      return this._createFieldEnumTypeDef(parent, field, nullable);
    }

    if (type instanceof GraphQLList) {
      return this._createFieldArrayTypeDef(parent, field, nullable);
    }

    if (type instanceof GraphQLNonNull) {
      return this._createFieldTypeDef(parent, field, type.ofType, false);
    } else {
      assertNever(type);
    }
  }

  /**
   * Create GraphQL Object type definition.
   */
  private _createObjectTypeDef(
    type: GraphQLObjectType | GraphQLInterfaceType | GraphQLInputObjectType,
  ): ObjectTypeDef[] {
    const fields = Object.values(type.getFields()).map((field) =>
      this._createFieldTypeDef(type, field, field.type)
    );
    const fieldResolverInputTypes: ObjectTypeDef[] = fields
      .filter((field) =>
        field.resolver === true && typeof field.argsInputName === "string"
      )
      .map<ObjectTypeDef>((field) => {
        return {
          type: Types.OBJECT,
          name: field.argsInputName,
          comment: `Argument input type for ${field.argsInputName}.`,
          fields: field?.args ?? [],
        };
      });
    return [
      ...fieldResolverInputTypes,
      {
        type: Types.OBJECT,
        name: type.name,
        comment: type.description ?? undefined,
        fields,
      },
    ];
  }

  /**
   * Create GraphQL Enum type definition.
   */
  private _createEnumTypeDef(type: GraphQLEnumType): EnumTypeDef[] {
    return [
      {
        type: Types.ENUM,
        name: type.name,
        comment: type.description ?? undefined,
        values: type.getValues().map((value) => ({
          name: value.name,
          comment: value.description ?? undefined,
        })),
      },
    ];
  }

  /**
   * Create GraphQL Union type definition.
   */
  private _createUnionTypeDef(type: GraphQLUnionType): UnionTypeDef[] {
    return [
      {
        type: Types.UNION,
        name: type.name,
        comment: type.description ?? undefined,
        types: type.getTypes().map((unionType) => ({
          name: unionType.name,
        })),
      },
    ];
  }

  /**
   * Create Scalar Type Definition
   */
  private _createScalarTypeDef(type: GraphQLScalarType): ScalarTypeDef {
    return {
      type: Types.SCALAR,
      name: type.name,
      comment: type.description ?? undefined,
    };
  }

  /**
   * Create TypeScript utility type definitions to be used throughout the generated types.
   */
  private _createUtilityTypeDefs(): Array<
    [string, string, ...string[]]
  > {
    return [
      ["graphql", "GraphQLResolveInfo"],
    ];
  }

  /**
   * Create TypeScript type definitions from GraphQL named type.
   */
  private _createTypeDefs(type: GraphQLNamedType): TypeDef[] {
    if (type instanceof GraphQLScalarType) {
      return [this._createScalarTypeDef(type)];
    }

    if (
      type instanceof GraphQLObjectType ||
      type instanceof GraphQLInterfaceType ||
      type instanceof GraphQLInputObjectType
    ) {
      return this._createObjectTypeDef(type);
    }

    if (type instanceof GraphQLEnumType) {
      return this._createEnumTypeDef(type);
    }

    if (type instanceof GraphQLUnionType) {
      return this._createUnionTypeDef(type);
    } else {
      assertNever(type);
    }
  }

  /**
   * Add type definition to registered Schema types.
   */
  private _addTypeDefToSchemaTypes(
    schemaTypes: GraphQLSchemaTypes,
    type: GraphQLNamedType,
    typeDef: TypeDef,
  ): GraphQLSchemaTypes {
    if (type instanceof GraphQLScalarType) {
      return {
        ...schemaTypes,
        SCALAR: [...schemaTypes.SCALAR ?? [], typeDef as ScalarTypeDef],
      };
    }

    if (type instanceof GraphQLEnumType) {
      return {
        ...schemaTypes,
        ENUM: [...schemaTypes.ENUM ?? [], typeDef as EnumTypeDef],
      };
    }

    if (type instanceof GraphQLInputObjectType) {
      return {
        ...schemaTypes,
        INPUT_OBJECT: [
          ...schemaTypes.INPUT_OBJECT ?? [],
          typeDef as ObjectTypeDef,
        ],
      };
    }

    if (type instanceof GraphQLInterfaceType) {
      return {
        ...schemaTypes,
        INTERFACE: [...schemaTypes.INTERFACE ?? [], typeDef as ObjectTypeDef],
      };
    }

    if (type instanceof GraphQLObjectType) {
      if (GraphQLService.rootTypeNames.includes(type.name)) {
        if (
          GraphQLService.rootTypeNames.some((rootTypeName) =>
            typeDef.name.startsWith(rootTypeName) &&
            typeDef.name.endsWith("Input")
          )
        ) {
          return {
            ...schemaTypes,
            ROOT_INPUT_OBJECT: [
              ...schemaTypes.ROOT_INPUT_OBJECT ?? [],
              typeDef as ObjectTypeDef,
            ],
          };
        }
        return {
          ...schemaTypes,
          ROOT: [...schemaTypes.ROOT ?? [], typeDef as ObjectTypeDef],
        };
      }
      return {
        ...schemaTypes,
        OBJECT: [...schemaTypes.OBJECT ?? [], typeDef as ObjectTypeDef],
      };
    }

    if (type instanceof GraphQLUnionType) {
      return {
        ...schemaTypes,
        UNION: [...schemaTypes.UNION ?? [], typeDef as UnionTypeDef],
      };
    } else {
      assertNever(type);
    }
  }

  /**
   * Arrange and sort the schema type definitions.
   */
  private _arrangeSchemaTypeDefs(schemaTypes: GraphQLSchemaTypes): TypeDef[] {
    return [
      ...schemaTypes.SCALAR ?? [],
      ...schemaTypes.ENUM ?? [],
      ...schemaTypes.INPUT_OBJECT ?? [],
      ...schemaTypes.INTERFACE ?? [],
      ...schemaTypes.OBJECT ?? [],
      ...schemaTypes.UNION ?? [],
      ...schemaTypes.ROOT_INPUT_OBJECT ?? [],
      ...schemaTypes.ROOT ?? [],
    ];
  }

  /**
   * Get GraphQL schema from input schema string.
   */
  public getSchema(rawSchema: string): GraphQLSchema {
    let schema = new GraphQLSchema({
      query: undefined,
    });

    const parsedSchema = parse(rawSchema);

    schema = extendSchema(schema, {
      kind: Kind.DOCUMENT,
      definitions: this._getStubTypes(parsedSchema.definitions),
    });

    schema = extendSchema(
      schema,
      parsedSchema,
      { assumeValidSDL: true },
    );

    return schema;
  }

  /**
   * Generate TypeScript type definitions from GraphQL Schema.
   */
  public generateSchemaTypeDefs(rawSchema: string): TypeDef[] {
    // Get schema and set up
    const schema = this.getSchema(rawSchema);
    const typesToIgnore = ["String", "Int", "Float", "Boolean"];
    let schemaTypes: GraphQLSchemaTypes = {};

    // Create type defs
    for (const type of Object.values(schema.getTypeMap())) {
      if (!type.name.startsWith("__") && !typesToIgnore.includes(type.name)) {
        const typeDefs = this._createTypeDefs(type);
        for (const typeDef of typeDefs) {
          schemaTypes = this._addTypeDefToSchemaTypes(
            schemaTypes,
            type,
            typeDef,
          );
        }
      }
    }

    // Create types and print
    return this._arrangeSchemaTypeDefs(schemaTypes).flat();
  }

  public generateResolverDefs(rawSchema: string): ClassDef[] {
    const classDefs: ClassDef[] = [];
    const schemaTypeDefs = this.generateSchemaTypeDefs(rawSchema);

    for (const typeDef of schemaTypeDefs) {
      if (
        typeDef.type === Types.OBJECT &&
        GraphQLService.rootTypeNames.includes(typeDef.name)
      ) {
        classDefs.push({
          name: `${typeDef.name}Resolver`,
          implementation: typeDef.name,
          imports: [
            ["graphql", "GraphQLResolveInfo"],
            [
              "../types",
              "Maybe",
              "MaybePromise",
              typeDef.name,
              ...typeDef.fields.map((field) => field.argsInputName),
            ],
          ],
          methods: typeDef.fields.map<ClassDefMethod>((field) => ({
            name: field.name,
            args: [
              { name: "_root", typeName: "any" },
              { name: "_args", typeName: "any" },
              { name: "_context", typeName: "any" },
              { name: "_info", typeName: "GraphQLResolveInfo" },
            ],
            returnType: field,
          })),
        });
      }
    }

    return classDefs;
  }

  public generateSchema(rawSchema: string): string {
    const typeDefs = this.generateSchemaTypeDefs(rawSchema);

    const utilityTypeDefs = this._createUtilityTypeDefs();
    const typeNodes = this.typeScriptService.createUtilityTypeDefs(
      utilityTypeDefs,
    );
    for (const typeDef of typeDefs) {
      typeNodes.push(this.typeScriptService.createTypeDef(typeDef));
    }

    return this.typeScriptService.print(typeNodes);
  }

  public generate(rawSchema: string): GenerateResult {
    // Create TypeScript types
    const schema = this.generateSchema(rawSchema);

    // Create TypeScript resolvers
    const resolvers: Record<string, string> = {};
    // TODO: resolvers
    // const resolverDefs = this.generateResolverDefs(rawSchema);
    // for (const resolverDef of resolverDefs) {
    //   const resolverNodes = this.typeScriptService.createClassDef(resolverDef);
    //   resolvers[resolverDef.name] = this.typeScriptService.print(
    //     resolverNodes,
    //   );
    // }

    return { schema, resolvers };
  }

  // TODO:
  // Loop over types
  // For each type, identify resolvers and construct a Resolver type class for each if necessary
  // Write out these files
}
