import * as os from 'os'
import * as ts from 'typescript'

import { FieldScalarTypeDef, FieldArrayTypeDef, FieldTypeDef, FieldTypes, ObjectTypeDef, UnionTypeDef, EnumTypeDef, ScalarTypeDef, TypeDef, Types } from './typescript.type'
import { assertNever, Maybe, MaybeNull } from '../util'

/**
 * TypeScript service.
 */
export class TypeScriptService {
  private readonly factory: ts.NodeFactory
  private readonly printer: ts.Printer

  public readonly ts: typeof ts

  constructor () {
    this.ts = ts
    this.factory = this.ts.factory
    this.printer = this.ts.createPrinter({ removeComments: false })
  }

  /**
   * Create Maybe type definition.
   */
  private _createMaybeTypeDef (): ts.Node {
    return this._withComment('Marks a type as nullable.', this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(this.ts.SyntaxKind.ExportKeyword)],
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
        this.factory.createKeywordTypeNode(this.ts.SyntaxKind.UndefinedKeyword)
      ])
    ))
  }

  /**
   * Create MaybePromise type definition.
   */
  private _createMaybePromiseTypeDef (): ts.Node {
    return this._withComment('Marks a type as a nullable Promise.', this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier('MaybePromise'),
      [this.factory.createTypeParameterDeclaration(
        this.factory.createIdentifier('T'),
        undefined,
        undefined
      )],
      this.factory.createUnionTypeNode([
        this.factory.createTypeReferenceNode(
          this.factory.createIdentifier('Promise'),
          [this.factory.createTypeReferenceNode(
            this.factory.createIdentifier('T'),
            undefined
          )]
        ),
        this.factory.createTypeReferenceNode(
          this.factory.createIdentifier('T'),
          undefined
        )
      ])
    ))
  }

  /**
   * Create context type definition.
   */
  private _createContextTypeDef (): ts.Node {
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

  /**
   * Create root type definition.
   */
  private _createRootTypeDef (): ts.Node {
    return this._withComment('Constructs a ParentType from an input type.', this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(this.ts.SyntaxKind.ExportKeyword)],
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
            this.ts.SyntaxKind.KeyOfKeyword,
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
              this.factory.createToken(this.ts.SyntaxKind.DotDotDotToken),
              this.factory.createIdentifier('args'),
              undefined,
              this.factory.createKeywordTypeNode(this.ts.SyntaxKind.AnyKeyword),
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

  /**
   * Create an Opaque type definition,
   */
  private _createOpaqueTypeDef (name: string, typeNode: ts.TypeNode, comment: MaybeNull<string>): ts.TypeAliasDeclaration {
    return this._withComment(comment, this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(this.ts.SyntaxKind.ExportKeyword)],
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

  /**
   * Attach a comment to a node.
   */
  private _withComment<TNode extends ts.Node>(description: MaybeNull<string>, node: TNode): TNode {
    if (typeof description === 'string') {
      // We need to serialise this to a JSDoc comment
      const serialisedDescription = `* ${description.trim()} `
      return this.ts.addSyntheticLeadingComment(node, this.ts.SyntaxKind.MultiLineCommentTrivia, serialisedDescription, true)
    }
    return node
  }

  /**
   * Create Maybe type node.
   */
  private _createMaybeTypeNode (node: ts.TypeNode, nullable: boolean): ts.TypeNode {
    if (nullable) {
      return this.factory.createTypeReferenceNode(
        this.factory.createIdentifier('Maybe'),
        [node]
      )
    }
    return node
  }

  /**
   * Create MaybePromise type node.
   */
  private _createMaybePromiseTypeNode (node: ts.TypeNode, promise: boolean): ts.TypeNode {
    if (promise) {
      return this.factory.createTypeReferenceNode(
        // TODO: make this ID type-safe
        this.factory.createIdentifier('MaybePromise'),
        [node]
      )
    }
    return node
  }

  /**
   * Create Root type node.
   */
  private _createRootTypeNode (root: Maybe<string>): ts.TypeNode {
    if (typeof root === 'undefined') {
      return this.factory.createTypeLiteralNode([])
    }
    return this.factory.createTypeReferenceNode(
      this.factory.createIdentifier('ParentType'),
      [this.factory.createTypeReferenceNode(
        this.factory.createIdentifier(root),
        undefined
      )]
    )
  }

  /**
   * Create nullable token.
   */
  private _createNullableToken (nullable: boolean): Maybe<ts.PunctuationToken<ts.SyntaxKind.QuestionToken>> {
    return nullable ? this.factory.createToken(this.ts.SyntaxKind.QuestionToken) : undefined
  }

  /**
   * Create Field Scalar node.
   */
  private _createFieldScalarTypeNode (field: FieldScalarTypeDef): ts.TypeNode {
    switch (field.typeName) {
      case 'Int':
      case 'Float': {
        return this.factory.createKeywordTypeNode(this.ts.SyntaxKind.NumberKeyword)
      }
      case 'String': {
        return this.factory.createKeywordTypeNode(this.ts.SyntaxKind.StringKeyword)
      }
      case 'Boolean': {
        return this.factory.createKeywordTypeNode(this.ts.SyntaxKind.BooleanKeyword)
      }
      default: {
        return this.factory.createTypeReferenceNode(this.factory.createIdentifier(field.typeName))
      }
    }
  }

  /**
   * Create Field Array type node.
   */
  private _createFieldArrayTypeNode ({ type, element, ...field }: FieldArrayTypeDef): ts.TypeNode {
    return this.factory.createArrayTypeNode(this._createFieldTypeNode({ ...field, ...element }, true))
  }

  /**
   * Create Field type node.
   */
  private _createFieldTypeNode (field: FieldTypeDef, useMaybe = false): ts.TypeNode {
    let type: ts.TypeNode
    switch (field.type) {
      case FieldTypes.UNION:
      case FieldTypes.ENUM:
      case FieldTypes.OBJECT: {
        type = this.factory.createTypeReferenceNode(this.factory.createIdentifier(field.typeName))
        break
      }
      case FieldTypes.SCALAR: {
        type = this._createFieldScalarTypeNode(field)
        break
      }
      case FieldTypes.ARRAY: {
        type = this._createFieldArrayTypeNode(field)
        break
      }
      // istanbul ignore next: caught by compilation
      default: {
        assertNever(field)
      }
    }
    if (useMaybe) {
      type = this._createMaybeTypeNode(type, field.nullable)
    }
    return type
  }

  /**
   * Create Field resolver type definition.
   */
  private _createFieldResolverTypeElement (field: FieldTypeDef): ts.TypeElement {
    return this.factory.createMethodSignature(
      undefined,
      this.factory.createIdentifier(field.name),
      this._createNullableToken(field.nullable),
      undefined,
      [
        this.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          this.factory.createIdentifier('root'),
          undefined,
          this._createRootTypeNode(field.parent),
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
      this._createMaybePromiseTypeNode(this._createMaybeTypeNode(this._createFieldTypeNode(field), field.nullable), field.promise)
    )
  }

  /**
   * Create Field type definition.
   */
  private _createFieldTypeElement (field: FieldTypeDef): ts.TypeElement {
    let typeElement: ts.TypeElement
    if (field.resolver === true) {
      typeElement = this._createFieldResolverTypeElement(field)
    } else {
      typeElement = this.factory.createPropertySignature(
        undefined,
        this.factory.createIdentifier(field.name),
        this._createNullableToken(field.nullable),
        this._createMaybePromiseTypeNode(this._createFieldTypeNode(field), field.promise)
      )
    }
    return this._withComment(field.comment, typeElement)
  }

  /**
   * Create Object type definition.
   */
  private _createObjectTypeDef (typeDef: ObjectTypeDef): ts.InterfaceDeclaration {
    return this._withComment(typeDef.comment, this.factory.createInterfaceDeclaration(
      undefined,
      [this.factory.createModifier(this.ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier(typeDef.name),
      undefined,
      undefined,
      typeDef.fields.map(field => this._createFieldTypeElement(field))
    ))
  }

  /**
   * Create Union type definition.
   */
  private _createUnionTypeDef (typeDef: UnionTypeDef): ts.TypeAliasDeclaration {
    return this._withComment(typeDef.comment, this.factory.createTypeAliasDeclaration(
      undefined,
      [this.factory.createModifier(this.ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier(typeDef.name),
      undefined,
      this.factory.createUnionTypeNode(typeDef.types.map(unionTypeDef => this.factory.createTypeReferenceNode(
        this.factory.createIdentifier(unionTypeDef.name),
        undefined
      )))
    ))
  }

  /**
   * Create Enum type definition.
   */
  private _createEnumTypeDef (typeDef: EnumTypeDef): ts.EnumDeclaration {
    return this._withComment(typeDef.comment, this.factory.createEnumDeclaration(
      undefined,
      [this.factory.createModifier(this.ts.SyntaxKind.ExportKeyword)],
      this.factory.createIdentifier(typeDef.name),
      typeDef.values.map(enumValue =>
        this._withComment(enumValue.comment, this.factory.createEnumMember(
          this.factory.createIdentifier(enumValue.name),
          this.factory.createStringLiteral(enumValue.name)
        ))
      )
    ))
  }

  /**
   * Create Scalar type definition.
   */
  private _createScalarTypeDef (typeDef: ScalarTypeDef): ts.TypeAliasDeclaration {
    if (typeDef.name === 'ID') {
      return this._createOpaqueTypeDef(
        typeDef.name,
        this.factory.createParenthesizedType(this.factory.createUnionTypeNode([
          this.factory.createKeywordTypeNode(this.ts.SyntaxKind.StringKeyword),
          this.factory.createKeywordTypeNode(this.ts.SyntaxKind.NumberKeyword)
        ])),
        typeDef.comment
      )
    }
    return this._createOpaqueTypeDef(
      typeDef.name,
      this.factory.createKeywordTypeNode(this.ts.SyntaxKind.AnyKeyword),
      typeDef.comment
    )
  }

  /**
   * Create utility type definitions to be shared throughout the generated typings.
   */
  public createUtilityTypeDefs (importDefs: Array<[string, string, ...string[]]>): ts.Node[] {
    return [
      ...importDefs.map(importDef => this.createImportTypeDef(...importDef)),
      this._createContextTypeDef(),
      this._createMaybeTypeDef(),
      this._createMaybePromiseTypeDef(),
      this._createRootTypeDef()
    ]
  }

  /**
   * Create a type definition.
   */
  public createTypeDef (typeDef: TypeDef): ts.Node {
    switch (typeDef.type) {
      case Types.OBJECT: {
        return this._createObjectTypeDef(typeDef)
      }
      case Types.SCALAR: {
        return this._createScalarTypeDef(typeDef)
      }
      case Types.ENUM: {
        return this._createEnumTypeDef(typeDef)
      }
      case Types.UNION: {
        return this._createUnionTypeDef(typeDef)
      }
      // istanbul ignore next: caught by compilation
      default: {
        assertNever(typeDef)
      }
    }
  }

  public createClassDef (classDef: ClassDef): ts.Node[] {
    return [
      ...classDef.imports.map(([moduleName, ...moduleImports]) =>
        this.factory.createImportDeclaration(
          undefined,
          undefined,
          this.factory.createImportClause(
            false,
            undefined,
            this.factory.createNamedImports(moduleImports.map(moduleImport => this.factory.createImportSpecifier(
              undefined,
              this.factory.createIdentifier(moduleImport)
            )))
          ),
          this.factory.createStringLiteral(moduleName)
        )
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
            undefined
          )]
        )],
        classDef.methods.map(method => this.factory.createMethodDeclaration(
          undefined,
          [this.factory.createModifier(ts.SyntaxKind.AsyncKeyword)],
          undefined,
          this.factory.createIdentifier(method.name),
          undefined,
          undefined,
          method.args.map(arg => this.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            this.factory.createIdentifier(arg.name),
            undefined,
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier(arg.typeName),
              undefined
            ),
            undefined
          )),
          this.factory.createTypeReferenceNode(
            this.factory.createIdentifier('Promise'),
            [this._createFieldTypeNode(method.returnType, method.returnType.nullable)]
          ),
          this.factory.createBlock(
            [],
            false
          )
        ))
      )]
  }

  /**
   * Create import type definitions.
   */
  public createImportTypeDef (module: string, ...namedImports: string[]): ts.Node {
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

  /**
   * Print a list of node definitions.
   */
  public print (nodes: ts.Node[], filename = 'generated.ts'): string {
    const sourceFile: ts.SourceFile = this.ts.createSourceFile(filename, '', this.ts.ScriptTarget.ES2020, undefined, this.ts.ScriptKind.TS)
    let result = '/* eslint-disable */'

    for (const node of nodes) {
      result += `${os.EOL}${os.EOL}${this.printer.printNode(this.ts.EmitHint.Unspecified, node, sourceFile)}`
    }

    return result
  }
}

export interface ClassDefMethodArg {
  name: string
  typeName: string
}

export interface ClassDefMethod {
  name: string
  args: ClassDefMethodArg[]
  returnType: FieldTypeDef
}

export interface ClassDef {
  name: string
  implementation: string
  imports: Array<[string, ...string[]]>
  methods: ClassDefMethod[]
}
