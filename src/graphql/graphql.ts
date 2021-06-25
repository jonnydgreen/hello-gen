import { DefinitionNode, extendSchema, GraphQLSchema, Kind, parse, isTypeExtensionNode, GraphQLNamedType, GraphQLScalarType, GraphQLObjectType, GraphQLNonNull, GraphQLField, GraphQLOutputType, GraphQLInterfaceType, GraphQLInputObjectType, GraphQLUnionType, GraphQLEnumType, GraphQLList, GraphQLInputType, GraphQLArgument, isOutputType, isRequiredArgument } from 'graphql'
import { EnumTypeDef, FieldArrayElementTypeDef, FieldArrayTypeDef, FieldEnumTypeDef, FieldObjectTypeDef, FieldScalarTypeDef, FieldTypeDef, FieldTypes, FieldUnionTypeDef, ObjectTypeDef, ScalarTypeDef, TypeDef, Types, TypeScript, UnionTypeDef } from './typescript'
import { assertNever, upperFirst } from './utils'

export type GraphQLParentType = GraphQLObjectType | GraphQLInputObjectType | GraphQLInterfaceType

export class GraphQL {
  private readonly ts: TypeScript

  constructor () {
    this.ts = new TypeScript()
  }

  private static readonly extensionKindToDefinitionKind = {
    [Kind.SCALAR_TYPE_EXTENSION]: Kind.SCALAR_TYPE_DEFINITION,
    [Kind.OBJECT_TYPE_EXTENSION]: Kind.OBJECT_TYPE_DEFINITION,
    [Kind.INTERFACE_TYPE_EXTENSION]: Kind.INTERFACE_TYPE_DEFINITION,
    [Kind.UNION_TYPE_EXTENSION]: Kind.UNION_TYPE_DEFINITION,
    [Kind.ENUM_TYPE_EXTENSION]: Kind.ENUM_TYPE_DEFINITION,
    [Kind.INPUT_OBJECT_TYPE_EXTENSION]: Kind.INPUT_OBJECT_TYPE_DEFINITION
  }

  public static readonly rootTypeNames = ['Query', 'Mutation', 'Subscription']

  /**
   * Get stub types so we can account for any type definitions that are meant to be extended.
   */
  private getStubTypes (schemaDefinitions: readonly DefinitionNode[]): DefinitionNode[] {
    const definitions: DefinitionNode[] = []
    for (const definition of schemaDefinitions) {
      if (isTypeExtensionNode(definition)) {
        definitions.push({
          kind: GraphQL.extensionKindToDefinitionKind[definition.kind],
          name: definition.name
        })
      }
    }
    return definitions
  }

  private createScalarTypeDef (type: GraphQLScalarType): ScalarTypeDef {
    return {
      type: Types.SCALAR,
      name: type.name,
      comment: type.description ?? undefined
    }
  }

  private getTypeName (type: GraphQLInputType | GraphQLOutputType): string {
    if (type instanceof GraphQLNonNull || type instanceof GraphQLList) {
      return this.getTypeName(type.ofType)
    }
    return type.toString()
  }

  private isGraphQLField (field: any): field is GraphQLField<any, any> {
    return isOutputType(field.type)
  }

  private createBaseFieldTypeDef (parent: GraphQLParentType, field: GraphQLField<any, any> | GraphQLArgument, nullable: boolean): Omit<FieldTypeDef, 'type'> {
    const args = this.isGraphQLField(field) ? Object.values(field.args ?? []) : []
    return {
      name: field.name,
      typeName: this.getTypeName(field.type),
      comment: field.description ?? undefined,
      args: args.map<FieldTypeDef>(arg => this.createFieldTypeDef(parent, arg, arg.type, !isRequiredArgument(arg))),
      argsInputName: `${upperFirst(parent.name)}${upperFirst(field.name)}Input`,
      parent: GraphQL.rootTypeNames.includes(parent.name) ? undefined : parent.name,
      nullable
    }
  }

  private createFieldElementTypeDef (type: GraphQLInputType | GraphQLOutputType, nullable = true): FieldArrayElementTypeDef {
    if (type instanceof GraphQLScalarType) {
      return {
        type: FieldTypes.SCALAR,
        nullable
      }
    }

    if (
      type instanceof GraphQLObjectType ||
      type instanceof GraphQLInterfaceType ||
      type instanceof GraphQLInputObjectType
    ) {
      return {
        type: FieldTypes.OBJECT,
        nullable
      }
    }

    if (type instanceof GraphQLUnionType) {
      return {
        type: FieldTypes.UNION,
        nullable
      }
    }

    if (type instanceof GraphQLEnumType) {
      return {
        type: FieldTypes.OBJECT,
        nullable
      }
    }

    if (type instanceof GraphQLList) {
      return this.createFieldElementTypeDef(type.ofType)
    }

    // istanbul ignore else: handled by compilation
    if (type instanceof GraphQLNonNull) {
      return this.createFieldElementTypeDef(type.ofType, false)
    } else {
      assertNever(type)
    }
  }

  private createFieldArrayTypeDef (parent: GraphQLParentType, field: GraphQLField<any, any> | GraphQLArgument, nullable: boolean): FieldArrayTypeDef {
    return {
      ...this.createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.ARRAY,
      element: this.createFieldElementTypeDef(field.type)
    }
  }

  private createFieldScalarTypeDef (parent: GraphQLParentType, field: GraphQLField<any, any> | GraphQLArgument, nullable: boolean): FieldScalarTypeDef {
    return {
      ...this.createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.SCALAR
    }
  }

  private createFieldObjectTypeDef (parent: GraphQLParentType, field: GraphQLField<any, any> | GraphQLArgument, nullable: boolean): FieldObjectTypeDef {
    return {
      ...this.createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.OBJECT
    }
  }

  private createFieldUnionTypeDef (parent: GraphQLParentType, field: GraphQLField<any, any> | GraphQLArgument, nullable: boolean): FieldUnionTypeDef {
    return {
      ...this.createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.UNION
    }
  }

  private createFieldEnumTypeDef (parent: GraphQLParentType, field: GraphQLField<any, any> | GraphQLArgument, nullable: boolean): FieldEnumTypeDef {
    return {
      ...this.createBaseFieldTypeDef(parent, field, nullable),
      type: FieldTypes.ENUM
    }
  }

  private createFieldTypeDef (parent: GraphQLParentType, field: GraphQLField<any, any> | GraphQLArgument, type: GraphQLInputType | GraphQLOutputType, nullable = true): FieldTypeDef {
    if (type instanceof GraphQLScalarType) {
      return this.createFieldScalarTypeDef(parent, field, nullable)
    }

    if (
      type instanceof GraphQLObjectType ||
      type instanceof GraphQLInterfaceType ||
      type instanceof GraphQLInputObjectType
    ) {
      return this.createFieldObjectTypeDef(parent, field, nullable)
    }

    if (type instanceof GraphQLUnionType) {
      return this.createFieldUnionTypeDef(parent, field, nullable)
    }

    if (type instanceof GraphQLEnumType) {
      return this.createFieldEnumTypeDef(parent, field, nullable)
    }

    if (type instanceof GraphQLList) {
      return this.createFieldArrayTypeDef(parent, field, nullable)
    }

    // istanbul ignore else: handled by compilation
    if (type instanceof GraphQLNonNull) {
      return this.createFieldTypeDef(parent, field, type.ofType, false)
    } else {
      assertNever(type)
    }
  }

  private createObjectTypeDef (type: GraphQLObjectType | GraphQLInterfaceType | GraphQLInputObjectType): ObjectTypeDef[] {
    const fields = Object.values(type.getFields()).map(field => this.createFieldTypeDef(type, field, field.type))
    const fieldResolvers: ObjectTypeDef[] = fields
      .filter(field => field.args?.length > 0 && typeof field.argsInputName === 'string')
      .map<ObjectTypeDef>(field => {
      return {
        type: Types.OBJECT,
        name: field.argsInputName,
        comment: `Argument input type for ${field.argsInputName}.`,
        fields: field.args
      }
    })
    return [
      ...fieldResolvers,
      {
        type: Types.OBJECT,
        name: type.name,
        comment: type.description ?? undefined,
        fields
      }
    ]
  }

  private createEnumTypeDef (type: GraphQLEnumType): EnumTypeDef[] {
    return [
      {
        type: Types.ENUM,
        name: type.name,
        comment: type.description ?? undefined,
        values: type.getValues().map(value => ({
          name: value.name,
          comment: value.description ?? undefined
        }))
      }
    ]
  }

  private createUnionTypeDef (type: GraphQLUnionType): UnionTypeDef[] {
    return [
      {
        type: Types.UNION,
        name: type.name,
        comment: type.description ?? undefined,
        types: type.getTypes().map(unionType => ({
          name: unionType.name
        }))
      }
    ]
  }

  private createTypeDefs (type: GraphQLNamedType): TypeDef[] {
    if (type instanceof GraphQLScalarType) {
      return [this.createScalarTypeDef(type)]
    }

    if (
      type instanceof GraphQLObjectType ||
      type instanceof GraphQLInterfaceType ||
      type instanceof GraphQLInputObjectType) {
      return this.createObjectTypeDef(type)
    }

    if (type instanceof GraphQLEnumType) {
      return this.createEnumTypeDef(type)
    }

    // istanbul ignore else: handled by compilation
    if (type instanceof GraphQLUnionType) {
      return this.createUnionTypeDef(type)
    } else {
      assertNever(type)
    }
  }

  /**
   * Generate TypeScript type string from GraphQL Schema.
   */
  public generateTypes (schema: GraphQLSchema): string {
    const types = []
    const typesToIgnore = ['String', 'Int', 'Float', 'Boolean']

    for (const type of Object.values(schema.getTypeMap())) {
      if (!type.name.startsWith('__') && !typesToIgnore.includes(type.name)) {
        const typeDefs = this.createTypeDefs(type)
        for (const typeDef of typeDefs) {
          types.push(this.ts.createTypeDef(typeDef))
        }
      }
    }

    return this.ts.print(types)
  }

  /**
   * Get schema.
   */
  public getSchema (rawSchema: string): GraphQLSchema {
    let schema = new GraphQLSchema({
      query: undefined
    })

    const parsedSchema = parse(rawSchema)

    schema = extendSchema(schema, {
      kind: 'Document',
      definitions: this.getStubTypes(parsedSchema.definitions)
    })

    schema = extendSchema(
      schema,
      parsedSchema,
      { assumeValidSDL: true }
    )

    return schema
  }
}
