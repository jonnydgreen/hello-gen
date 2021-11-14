import { EOL, ts } from "../../../deps.ts";
import {
  assertNever,
  createMaybePromiseTypeNode,
  createMaybeTypeNode,
  createNullableToken,
  createParameterDeclaration,
  Maybe,
  MaybeNull,
  withComment,
} from "../../lib/index.ts";
import { createContextTypeDef } from "./templates/context-type-def.ts";
import { createMaybeTypeDef } from "./templates/maybe-type-def.ts";
import { createMaybePromiseTypeDef } from "./templates/maybe-promise-type-def.ts";
import { createParentTypeDef } from "./templates/parent-type-def.ts";
import {
  ClassDef,
  EnumTypeDef,
  FieldArrayTypeDef,
  FieldScalarTypeDef,
  FieldTypeDef,
  FieldTypes,
  ObjectTypeDef,
  ScalarTypeDef,
  TypeDef,
  Types,
  UnionTypeDef,
} from "./typescript.type.ts";

/**
 * TypeScript service.
 */
export class TypeScriptService {
  private readonly factory: ts.NodeFactory;
  private readonly printer: ts.Printer;

  constructor() {
    this.factory = ts.factory;
    this.printer = ts.createPrinter({
      removeComments: false,
      newLine: ts.NewLineKind.LineFeed,
    });
  }

  /**
   * Create an Opaque type definition,
   */
  private createOpaqueTypeDef(
    name: string,
    typeNode: ts.TypeNode,
    comment: MaybeNull<string>,
  ): ts.TypeAliasDeclaration {
    return withComment(
      comment,
      this.factory.createTypeAliasDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(name),
        undefined,
        this.factory.createIntersectionTypeNode([
          typeNode,
          this.factory.createTypeLiteralNode([
            this.factory.createPropertySignature(
              undefined,
              this.factory.createIdentifier("__opaque"),
              undefined,
              this.factory.createLiteralTypeNode(
                this.factory.createStringLiteral(name),
              ),
            ),
          ]),
        ]),
      ),
    );
  }

  /**
   * Create Parent type node.
   */
  private createParentTypeNode(parent: Maybe<string>): ts.TypeNode {
    if (typeof parent === "undefined") {
      return this.factory.createTypeLiteralNode([]);
    }
    return this.factory.createTypeReferenceNode(
      this.factory.createIdentifier("ParentType"),
      [this.factory.createTypeReferenceNode(
        this.factory.createIdentifier(parent),
        undefined,
      )],
    );
  }

  /**
   * Create Field Scalar node.
   */
  private createFieldScalarTypeNode(field: FieldScalarTypeDef): ts.TypeNode {
    switch (field.typeName) {
      case "Int":
      case "Float": {
        return this.factory.createKeywordTypeNode(
          ts.SyntaxKind.NumberKeyword,
        );
      }
      case "String": {
        return this.factory.createKeywordTypeNode(
          ts.SyntaxKind.StringKeyword,
        );
      }
      case "Boolean": {
        return this.factory.createKeywordTypeNode(
          ts.SyntaxKind.BooleanKeyword,
        );
      }
      default: {
        return this.factory.createTypeReferenceNode(
          this.factory.createIdentifier(field.typeName),
        );
      }
    }
  }

  /**
   * Create Field Array type node.
   */
  private createFieldArrayTypeNode(
    { element, ...field }: FieldArrayTypeDef,
  ): ts.TypeNode {
    return this.factory.createArrayTypeNode(
      this.createFieldTypeNode({ ...field, ...element }, true),
    );
  }

  /**
   * Create Field type node.
   */
  private createFieldTypeNode(
    field: FieldTypeDef,
    useMaybe = false,
  ): ts.TypeNode {
    let type: ts.TypeNode;
    switch (field.type) {
      case FieldTypes.UNION:
      case FieldTypes.ENUM:
      case FieldTypes.OBJECT: {
        type = this.factory.createTypeReferenceNode(
          this.factory.createIdentifier(field.typeName),
        );
        break;
      }
      case FieldTypes.SCALAR: {
        type = this.createFieldScalarTypeNode(field);
        break;
      }
      case FieldTypes.ARRAY: {
        type = this.createFieldArrayTypeNode(field);
        break;
      }
      default: {
        assertNever(field);
      }
    }
    if (useMaybe) {
      type = createMaybeTypeNode(this.factory, type, field.nullable);
    }
    return type;
  }

  /**
   * Create Field resolver type definition.
   */
  private createFieldResolverTypeElement(field: FieldTypeDef): ts.TypeElement {
    return this.factory.createMethodSignature(
      undefined,
      this.factory.createIdentifier(field.name),
      createNullableToken(this.factory, field.nullable),
      undefined,
      [
        createParameterDeclaration(
          this.factory,
          "root",
          this.createParentTypeNode(field.parent),
        ),
        createParameterDeclaration(
          this.factory,
          "args",
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier(field.argsInputName),
            undefined,
          ),
        ),
        createParameterDeclaration(
          this.factory,
          "context",
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier("Context"),
            undefined,
          ),
        ),
        createParameterDeclaration(
          this.factory,
          "info",
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier("GraphQLResolveInfo"),
            undefined,
          ),
        ),
      ],
      createMaybePromiseTypeNode(
        this.factory,
        createMaybeTypeNode(
          this.factory,
          this.createFieldTypeNode(field),
          field.nullable,
        ),
        field.promise,
      ),
    );
  }

  /**
   * Create Field type definition.
   */
  private createFieldTypeElement(field: FieldTypeDef): ts.TypeElement {
    if (field.args.length > 0) {
      return withComment(
        field.comment,
        this.createFieldResolverTypeElement(field),
      );
    } else {
      return withComment(
        field.comment,
        this.factory.createPropertySignature(
          undefined,
          this.factory.createIdentifier(field.name),
          createNullableToken(this.factory, field.nullable),
          createMaybePromiseTypeNode(
            this.factory,
            this.createFieldTypeNode(field),
            field.promise,
          ),
        ),
      );
    }
  }

  /**
   * Create Object type definition.
   */
  private createObjectTypeDef(typeDef: ObjectTypeDef): ts.InterfaceDeclaration {
    return withComment(
      typeDef.comment,
      this.factory.createInterfaceDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(typeDef.name),
        undefined,
        undefined,
        typeDef.fields.map((field) => this.createFieldTypeElement(field)),
      ),
    );
  }

  /**
   * Create Union type definition.
   */
  private createUnionTypeDef(typeDef: UnionTypeDef): ts.TypeAliasDeclaration {
    return withComment(
      typeDef.comment,
      this.factory.createTypeAliasDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(typeDef.name),
        undefined,
        this.factory.createUnionTypeNode(
          typeDef.types.map((unionTypeDef) =>
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier(unionTypeDef.name),
              undefined,
            )
          ),
        ),
      ),
    );
  }

  /**
   * Create Enum type definition.
   */
  private createEnumTypeDef(typeDef: EnumTypeDef): ts.EnumDeclaration {
    return withComment(
      typeDef.comment,
      this.factory.createEnumDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(typeDef.name),
        typeDef.values.map((enumValue) =>
          withComment(
            enumValue.comment,
            this.factory.createEnumMember(
              this.factory.createIdentifier(enumValue.name),
              this.factory.createStringLiteral(enumValue.name),
            ),
          )
        ),
      ),
    );
  }

  /**
   * Create Scalar type definition.
   */
  private createScalarTypeDef(typeDef: ScalarTypeDef): ts.TypeAliasDeclaration {
    if (typeDef.name === "ID") {
      return this.createOpaqueTypeDef(
        typeDef.name,
        this.factory.createParenthesizedType(this.factory.createUnionTypeNode([
          this.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          this.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
        ])),
        typeDef.comment,
      );
    }
    return this.createOpaqueTypeDef(
      typeDef.name,
      this.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
      typeDef.comment,
    );
  }

  /**
   * Create import type definitions.
   */
  public createImportTypeDef(
    module: string,
    ...namedImports: string[]
  ): ts.Node {
    return this.factory.createImportDeclaration(
      undefined,
      undefined,
      this.factory.createImportClause(
        false,
        undefined,
        this.factory.createNamedImports(
          namedImports.map((namedImport) =>
            this.factory.createImportSpecifier(
              undefined,
              this.factory.createIdentifier(namedImport),
            )
          ),
        ),
      ),
      this.factory.createStringLiteral(module),
    );
  }

  /**
   * Create utility type definitions to be shared throughout the generated typings.
   */
  public createUtilityTypeDefs(
    importDefs: Array<[string, string, ...string[]]>,
  ): ts.Node[] {
    return [
      ...importDefs.map((importDef) => this.createImportTypeDef(...importDef)),
      createContextTypeDef(this.factory),
      createMaybeTypeDef(this.factory),
      createMaybePromiseTypeDef(this.factory),
      createParentTypeDef(this.factory),
    ];
  }

  /**
   * Create a type definition.
   */
  public createTypeDef(typeDef: TypeDef): ts.Node {
    switch (typeDef.type) {
      case Types.OBJECT: {
        return this.createObjectTypeDef(typeDef);
      }
      case Types.SCALAR: {
        return this.createScalarTypeDef(typeDef);
      }
      case Types.ENUM: {
        return this.createEnumTypeDef(typeDef);
      }
      case Types.UNION: {
        return this.createUnionTypeDef(typeDef);
      }
      default: {
        assertNever(typeDef);
      }
    }
  }

  /**
   * Create a class definition.
   */
  public createClassDef(classDef: ClassDef): ts.Node[] {
    return [
      ...classDef.imports.map((importDef) =>
        this.createImportTypeDef(...importDef)
      ),
      this.factory.createClassDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(classDef.name),
        undefined,
        [this.factory.createHeritageClause(
          ts.SyntaxKind.ImplementsKeyword,
          [this.factory.createExpressionWithTypeArguments(
            this.factory.createIdentifier(classDef.implementation),
            undefined,
          )],
        )],
        [],
      ),
    ];
  }

  /**
   * Print a list of node definitions.
   */
  public print(nodes: ts.Node[], filename = "generated.ts"): string {
    const sourceFile: ts.SourceFile = ts.createSourceFile(
      filename,
      "",
      ts.ScriptTarget.ES2020,
      undefined,
      ts.ScriptKind.TS,
    );
    let result = "/* eslint-disable */";

    for (const node of nodes) {
      result += `${EOL.LF}${EOL.LF}${
        this.printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)
      }`;
    }

    return result;
  }
}
