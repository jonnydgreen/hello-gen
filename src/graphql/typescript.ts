import * as os from 'os'
import * as ts from 'typescript'

import { assertNever } from './utils'

export type Maybe<T> = T | undefined
export type MaybeNull<T> = T | undefined | null

export interface BaseTypeDef {
  name: string
  comment: Maybe<string>
}

export enum Types {
  SCALAR = 'SCALAR',
  UNION = 'UNION',
  OBJECT = 'OBJECT',
  ENUM = 'ENUM',
}

export enum FieldTypes {
  SCALAR = 'SCALAR',
  UNION = 'UNION',
  OBJECT = 'OBJECT',
  ENUM = 'ENUM',
  ARRAY = 'ARRAY',
}

export interface BaseFieldTypeDef extends BaseTypeDef {
  typeName: string
  args: FieldTypeDef[]
  nullable: boolean
  argsInputName: string
  parent?: string
}

export type FieldArrayElementTypeDef = Pick<Exclude<FieldTypeDef, FieldArrayTypeDef>, 'type'| 'nullable'>

export interface FieldArrayTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.ARRAY
  element: FieldArrayElementTypeDef
  nullable: boolean
}

export interface FieldScalarTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.SCALAR
}

export interface FieldUnionTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.UNION
}

export interface FieldObjectTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.OBJECT
}

export interface FieldEnumTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.ENUM
}

export type FieldTypeDef = FieldScalarTypeDef | FieldUnionTypeDef | FieldObjectTypeDef | FieldArrayTypeDef | FieldEnumTypeDef

export interface ObjectTypeDef extends BaseTypeDef {
  type: Types.OBJECT
  fields: FieldTypeDef[]
}

export interface ScalarTypeDef extends BaseTypeDef {
  type: Types.SCALAR
}

export type UnionTypeTypeDef = Pick<BaseTypeDef, 'name'>

export interface UnionTypeDef extends BaseTypeDef {
  type: Types.UNION
  types: UnionTypeTypeDef[]
}

export type EnumValueTypeDef = BaseTypeDef

export interface EnumTypeDef extends BaseTypeDef {
  type: Types.ENUM
  values: EnumValueTypeDef[]
}

export type TypeDef = ObjectTypeDef | ScalarTypeDef | UnionTypeDef | EnumTypeDef

export class TypeScript {
  private readonly factory: ts.NodeFactory
  private readonly printer: ts.Printer

  constructor () {
    this.factory = ts.factory
    this.printer = ts.createPrinter({ removeComments: false })
  }

  private getNullableToken (nullable: boolean): Maybe<ts.PunctuationToken<ts.SyntaxKind.QuestionToken>> {
    return nullable ? this.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined
  }

  private createImportTypeDef (module: string, ...namedImports: string[]): ts.Node {
    return this.factory.createImportDeclaration(
      undefined,
      undefined,
      this.factory.createImportClause(
        false,
        undefined,
        this.factory.createNamedImports(namedImports.map(namedImport => this.factory.createImportSpecifier(
          undefined,
          this.factory.createIdentifier(namedImport)
        )))
      ),
      this.factory.createStringLiteral(module)
    )
  }

  private createMaybeTypeDef (): ts.Node {
    return this.withComment('Marks a type as nullable.', this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier('Maybe'),
      [this.factory.createTypeParameterDeclaration(
        this.factory.createIdentifier('T'),
        undefined,
        undefined
      )],
      this.factory.createUnionTypeNode([
        this.factory.createTypeReferenceNode(
          this.factory.createIdentifier('T'),
          undefined
        ),
        this.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword)
      ])
    ))
  }

  private withMaybe (node: ts.TypeNode, nullable: boolean): ts.TypeNode {
    if (nullable) {
      return this.factory.createTypeReferenceNode(
        this.factory.createIdentifier('Maybe'),
        [node]
      )
    }
    return node
  }

  private createContextTypeDef (): ts.Node {
    const moduleName = 'mercurius'
    const moduleContextName = 'MercuriusContext'
    return this.factory.createImportDeclaration(
      undefined,
      undefined,
      this.factory.createImportClause(
        false,
        undefined,
        this.factory.createNamedImports([this.factory.createImportSpecifier(
          this.factory.createIdentifier(moduleContextName),
          this.factory.createIdentifier('Context')
        )])
      ),
      this.factory.createStringLiteral(moduleName)
    )
  }

  private createParentTypeDef (): ts.Node {
    return this.withComment('Constructs a ParentType from an input type.', this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier('ParentType'),
      [this.factory.createTypeParameterDeclaration(
        this.factory.createIdentifier('T'),
        undefined,
        undefined
      )],
      this.factory.createMappedTypeNode(
        undefined,
        this.factory.createTypeParameterDeclaration(
          this.factory.createIdentifier('TKey'),
          this.factory.createTypeOperatorNode(
            ts.SyntaxKind.KeyOfKeyword,
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier('T'),
              undefined
            )
          ),
          undefined
        ),
        undefined,
        undefined,
        this.factory.createConditionalTypeNode(
          this.factory.createIndexedAccessTypeNode(
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier('T'),
              undefined
            ),
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier('TKey'),
              undefined
            )
          ),
          this.factory.createFunctionTypeNode(
            undefined,
            [this.factory.createParameterDeclaration(
              undefined,
              undefined,
              this.factory.createToken(ts.SyntaxKind.DotDotDotToken),
              this.factory.createIdentifier('args'),
              undefined,
              this.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
              undefined
            )],
            this.factory.createInferTypeNode(this.factory.createTypeParameterDeclaration(
              this.factory.createIdentifier('TReturn'),
              undefined,
              undefined
            ))
          ),
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier('TReturn'),
            undefined
          ),
          this.factory.createIndexedAccessTypeNode(
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier('T'),
              undefined
            ),
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier('TKey'),
              undefined
            )
          )
        )
      )
    ))
  }

  private createOpaqueTypeDef (name: string, typeNode: ts.TypeNode, comment: MaybeNull<string>): ts.TypeAliasDeclaration {
    return this.withComment(comment, this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier(name),
      undefined,
      this.factory.createIntersectionTypeNode([
        typeNode,
        this.factory.createTypeLiteralNode([this.factory.createPropertySignature(
          undefined,
          this.factory.createIdentifier('__opaque'),
          undefined,
          this.factory.createLiteralTypeNode(this.factory.createStringLiteral(name))
        )])
      ])
    ))
  }

  private withComment <TNode extends ts.Node> (description: MaybeNull<string>, node: TNode): TNode {
    if (typeof description === 'string') {
      // We need to serialise this to a JSDoc comment
      const serialisedDescription = `* ${description.trim()} `
      return ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, serialisedDescription, true)
    }
    return node
  }

  private createUtilsTypeDefs (): ts.Node[] {
    return [
      // TODO: remove GraphQL
      this.createImportTypeDef('graphql', 'GraphQLResolveInfo'),
      this.createContextTypeDef(),
      this.createMaybeTypeDef(),
      this.createParentTypeDef()
    ]
  }

  private getFieldScalarTypeNode (field: FieldScalarTypeDef): ts.TypeNode {
    switch (field.typeName) {
      case 'Int':
      case 'Float': {
        return this.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
      }
      case 'String': {
        return this.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
      }
      case 'Boolean': {
        return this.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
      }
      default: {
        return this.factory.createTypeReferenceNode(this.factory.createIdentifier(field.typeName))
      }
    }
  }

  private getFieldArrayTypeNode ({ type, element, ...field }: FieldArrayTypeDef): ts.TypeNode {
    return this.factory.createArrayTypeNode(this.getFieldTypeNode({ ...field, ...element }, true))
  }

  private getFieldTypeNode (field: FieldTypeDef, useMaybe = false): ts.TypeNode {
    let type: ts.TypeNode
    switch (field.type) {
      case FieldTypes.UNION:
      case FieldTypes.ENUM:
      case FieldTypes.OBJECT: {
        type = this.factory.createTypeReferenceNode(this.factory.createIdentifier(field.typeName))
        break
      }
      case FieldTypes.SCALAR: {
        type = this.getFieldScalarTypeNode(field)
        break
      }
      case FieldTypes.ARRAY: {
        type = this.getFieldArrayTypeNode(field)
        break
      }
      // istanbul ignore next: caught by compilation
      default: {
        assertNever(field)
      }
    }
    if (useMaybe) {
      type = this.withMaybe(type, field.nullable)
    }
    return type
  }

  private getParentTypeDef (parent: Maybe<string>): ts.TypeNode {
    if (typeof parent === 'undefined') {
      return this.factory.createTypeLiteralNode([])
    }
    return this.factory.createTypeReferenceNode(
      this.factory.createIdentifier('ParentType'),
      [this.factory.createTypeReferenceNode(
        this.factory.createIdentifier(parent),
        undefined
      )]
    )
  }

  private createFieldResolver (field: FieldTypeDef): ts.TypeElement {
    return this.factory.createMethodSignature(
      undefined,
      this.factory.createIdentifier(field.name),
      this.getNullableToken(field.nullable),
      undefined,
      // TODO: maybe improve this even further by removing custom refs
      // e.g. field.args.map(...)
      [
        this.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          this.factory.createIdentifier('root'),
          undefined,
          this.getParentTypeDef(field.parent),
          undefined
        ),
        this.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          this.factory.createIdentifier('args'),
          undefined,
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier(field.argsInputName),
            undefined
          ),
          undefined
        ),
        this.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          this.factory.createIdentifier('context'),
          undefined,
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier('Context'),
            undefined
          ),
          undefined
        ),
        this.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          this.factory.createIdentifier('info'),
          undefined,
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier('GraphQLResolveInfo'),
            undefined
          ),
          undefined
        )
      ],
      this.withMaybe(this.getFieldTypeNode(field), field.nullable)
    )
  }

  private createFieldTypeDef (field: FieldTypeDef): ts.TypeElement {
    if (field.args.length > 0) {
      return this.withComment(field.comment, this.createFieldResolver(field))
    } else {
      return this.withComment(field.comment, this.factory.createPropertySignature(
        undefined,
        this.factory.createIdentifier(field.name),
        this.getNullableToken(field.nullable),
        this.getFieldTypeNode(field)
      ))
    }
  }

  private createObjectTypeDef (typeDef: ObjectTypeDef): ts.InterfaceDeclaration {
    return this.withComment(typeDef.comment, this.factory.createInterfaceDeclaration(
      undefined,
      [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier(typeDef.name),
      undefined,
      undefined,
      typeDef.fields.map(field => this.createFieldTypeDef(field))
    ))
  }

  private createUnionTypeDef (typeDef: UnionTypeDef): ts.TypeAliasDeclaration {
    return this.withComment(typeDef.comment, this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier(typeDef.name),
      undefined,
      this.factory.createUnionTypeNode(typeDef.types.map(unionTypeDef => this.factory.createTypeReferenceNode(
        this.factory.createIdentifier(unionTypeDef.name),
        undefined
      )))
    ))
  }

  private createEnumTypeDef (typeDef: EnumTypeDef): ts.EnumDeclaration {
    return this.withComment(typeDef.comment, this.factory.createEnumDeclaration(
      undefined,
      [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier(typeDef.name),
      typeDef.values.map(enumValue =>
        this.withComment(enumValue.comment, this.factory.createEnumMember(
          this.factory.createIdentifier(enumValue.name),
          this.factory.createStringLiteral(enumValue.name)
        ))
      )
    ))
  }

  private createScalarTypeDef (typeDef: ScalarTypeDef): ts.TypeAliasDeclaration {
    if (typeDef.name === 'ID') {
      return this.createOpaqueTypeDef(
        typeDef.name,
        this.factory.createParenthesizedType(this.factory.createUnionTypeNode([
          this.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          this.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
        ])),
        typeDef.comment
      )
    }
    return this.createOpaqueTypeDef(
      typeDef.name,
      this.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
      typeDef.comment
    )
  }

  public createTypeDef (typeDef: TypeDef): ts.Node {
    switch (typeDef.type) {
      case Types.OBJECT: {
        // TODO: handle arguments
        return this.createObjectTypeDef(typeDef)
      }
      case Types.SCALAR: {
        return this.createScalarTypeDef(typeDef)
      }
      case Types.ENUM: {
        return this.createEnumTypeDef(typeDef)
      }
      case Types.UNION: {
        return this.createUnionTypeDef(typeDef)
      }
      // istanbul ignore next: caught by compilation
      default: {
        assertNever(typeDef)
      }
    }
  }

  public print (nodes: ts.Node[]): string {
    const sourceFile: ts.SourceFile = ts.createSourceFile('generated.ts', '', ts.ScriptTarget.ES2020, undefined, ts.ScriptKind.TS)
    let result = '/* eslint-disable */'

    // Add util types
    const nodesWithUtils = [...this.createUtilsTypeDefs(), ...nodes]

    for (const node of nodesWithUtils) {
      result += `${os.EOL}${os.EOL}${this.printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)}`
    }

    return result
  }
}
