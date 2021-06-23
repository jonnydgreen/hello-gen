import * as os from 'os'
import * as ts from 'typescript'
import {
  GraphQLEnumType,
  GraphQLField,
  GraphQLInputField,
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNamedType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLScalarType,
  GraphQLUnionType
} from 'graphql'
import { assertNever, upperFirst } from './utils'

export type Maybe<T> = T | undefined
export type MaybeNull<T> = T | undefined | null

export class TypeScript {
  private readonly factory: ts.NodeFactory
  private readonly printer: ts.Printer

  constructor () {
    this.factory = ts.factory
    this.printer = ts.createPrinter({ removeComments: false })
  }

  private getContextDef (): ts.Node {
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
    return this.factory.createTypeAliasDeclaration(
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
    )
  }

  private createOpaqueType (name: string, type: GraphQLScalarType, typeNode: ts.TypeNode): ts.TypeAliasDeclaration {
    return this.withComment(type.description, this.factory.createTypeAliasDeclaration(
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

  private withMaybe (node: ts.TypeNode, useMaybe: boolean): ts.TypeNode {
    if (useMaybe) {
      return this.factory.createTypeReferenceNode(
        this.factory.createIdentifier('Maybe'),
        [node]
      )
    }

    return node
  }

  private getTypeNode (type: GraphQLInputType | GraphQLOutputType, useMaybe = false): ts.TypeNode {
    if (type instanceof GraphQLNonNull) {
      return this.getTypeNode(type.ofType)
    }

    if (type instanceof GraphQLScalarType) {
      switch (type.name) {
        case 'Int':
        case 'Float': {
          return this.withMaybe(this.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword), useMaybe)
        }
        case 'String': {
          return this.withMaybe(this.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), useMaybe)
        }
        case 'Boolean': {
          return this.withMaybe(this.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword), useMaybe)
        }
        default: {
          return this.withMaybe(this.factory.createTypeReferenceNode(this.factory.createIdentifier(type.name)), useMaybe)
        }
      }
    }

    if (
      type instanceof GraphQLEnumType ||
      type instanceof GraphQLObjectType ||
      type instanceof GraphQLInputObjectType ||
      type instanceof GraphQLInterfaceType ||
      type instanceof GraphQLUnionType
    ) {
      return this.withMaybe(this.factory.createTypeReferenceNode(this.factory.createIdentifier(type.name)), useMaybe)
    }

    // istanbul ignore else: caught by compilation
    if (type instanceof GraphQLList) {
      return this.withMaybe(this.factory.createArrayTypeNode(this.getTypeNode(type.ofType, true)), useMaybe)
    } else {
      assertNever(type)
    }
  }

  private getNullableToken (fieldType: GraphQLInputType | GraphQLOutputType): Maybe<ts.PunctuationToken<ts.SyntaxKind.QuestionToken>> {
    return fieldType instanceof GraphQLNonNull ? undefined : this.factory.createToken(ts.SyntaxKind.QuestionToken)
  }

  private withComment <TNode extends ts.Node> (description: MaybeNull<string>, node: TNode): TNode {
    if (typeof description === 'string') {
      // We need to serialise this to a JSDoc comment
      const serialisedDescription = `* ${description.trim()} `
      return ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, serialisedDescription, true)
    }
    return node
  }

  private getParentTypeDef (parent: string): ts.TypeNode {
    const rootTypes = ['Query', 'Mutation', 'Subscription']
    if (rootTypes.includes(parent)) {
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

  private getFieldDefWithNoArgs (fieldName: string, field: GraphQLField<any, any> | GraphQLInputField): ts.TypeElement {
    return this.withComment(field.description, this.factory.createPropertySignature(
      undefined,
      this.factory.createIdentifier(fieldName),
      this.getNullableToken(field.type),
      this.getTypeNode(field.type)
    ))
  }

  private getFieldDef (parent: string, fieldName: string, field: GraphQLField<any, any>): [Maybe<ts.InterfaceDeclaration>, ts.TypeElement] {
    if (field.args?.length > 0) {
      const argInputTypeName = `${parent}${upperFirst(fieldName)}Input`
      return [this.withComment(`Argument input type for ${argInputTypeName}.`, this.factory.createInterfaceDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(argInputTypeName),
        undefined,
        undefined,
        field.args.map(arg => this.withComment(arg.description, this.factory.createPropertySignature(
          undefined,
          this.factory.createIdentifier(arg.name),
          this.getNullableToken(arg.type),
          this.getTypeNode(arg.type)
        )))
      )), this.withComment(field.description, this.factory.createMethodSignature(
        undefined,
        this.factory.createIdentifier(fieldName),
        this.getNullableToken(field.type),
        undefined,
        [
          this.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            this.factory.createIdentifier('root'),
            undefined,
            this.getParentTypeDef(parent),
            undefined
          ),
          this.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            this.factory.createIdentifier('args'),
            undefined,
            this.factory.createTypeReferenceNode(
              this.factory.createIdentifier(argInputTypeName),
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
        this.getTypeNode(field.type)
      ))]
    }

    return [undefined, this.getFieldDefWithNoArgs(fieldName, field)]
  }

  private createUtilsTypeDefs (): ts.Node[] {
    return [
      this.factory.createImportDeclaration(
        undefined,
        undefined,
        this.factory.createImportClause(
          false,
          undefined,
          this.factory.createNamedImports([this.factory.createImportSpecifier(
            undefined,
            this.factory.createIdentifier('GraphQLResolveInfo')
          )])
        ),
        this.factory.createStringLiteral('graphql')
      ),
      this.getContextDef(),
      this.withComment('Marks a type as nullable.', this.factory.createTypeAliasDeclaration(
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
      )),
      this.withComment('Constructs a ParentType from an input type.', this.createParentTypeDef())
    ]
  }

  public createTypeDef (name: string, type: GraphQLNamedType): ts.Node[] {
    if (type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType) {
      const argumentDefs = []
      const fieldDefs = []

      for (const [fieldName, field] of Object.entries(type.getFields())) {
        const [argumentDef, fieldDef] = this.getFieldDef(name, fieldName, field)
        if (typeof argumentDef !== 'undefined') {
          argumentDefs.push(argumentDef)
        }
        fieldDefs.push(fieldDef)
      }

      return [...argumentDefs, this.withComment(type.description, this.factory.createInterfaceDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(name),
        undefined,
        undefined,
        fieldDefs)
      )]
    }

    if (type instanceof GraphQLInputObjectType) {
      return [this.withComment(type.description, this.factory.createInterfaceDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(name),
        undefined,
        undefined,
        Object.entries(type.getFields()).map(([fieldName, field]) => this.getFieldDefWithNoArgs(fieldName, field))
      ))]
    }

    if (type instanceof GraphQLUnionType) {
      return [this.withComment(type.description, this.factory.createTypeAliasDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(name),
        undefined,
        this.factory.createUnionTypeNode(type.getTypes().map(unionType => this.factory.createTypeReferenceNode(
          this.factory.createIdentifier(unionType.name),
          undefined
        )))
      ))]
    }

    if (type instanceof GraphQLEnumType) {
      return [this.withComment(type.description, this.factory.createEnumDeclaration(
        undefined,
        [this.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        this.factory.createIdentifier(name),
        type.getValues().map(enumValue =>
          this.withComment(enumValue.description, this.factory.createEnumMember(
            this.factory.createIdentifier(enumValue.name),
            this.factory.createStringLiteral(enumValue.name)
          ))
        )
      ))]
    }

    // istanbul ignore else: caught by compilation
    if (type instanceof GraphQLScalarType) {
      if (name === 'ID') {
        return [this.createOpaqueType(
          name,
          type,
          this.factory.createParenthesizedType(this.factory.createUnionTypeNode([
            this.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            this.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
          ])))]
      }
      return [this.createOpaqueType(
        name,
        type,
        this.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
      )]
    } else {
      assertNever(type)
    }
  }

  public print (nodes: ts.Node[]): string {
    const sourceFile: ts.SourceFile = ts.createSourceFile('graphql.ts', '', ts.ScriptTarget.ES2020, undefined, ts.ScriptKind.TS)
    let result = '/* eslint-disable */'

    // Add util types
    const nodesWithUtils = [...this.createUtilsTypeDefs(), ...nodes]

    for (const node of nodesWithUtils) {
      result += `${os.EOL}${os.EOL}${this.printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)}`
    }

    return result
  }
}
