import { DefinitionNode, extendSchema, GraphQLSchema, Kind, parse, isTypeExtensionNode } from 'graphql'
import { TypeScript } from './typescript'

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

  /**
   * Generate TypeScript type string from GraphQL Schema.
   */
  public generateTypes (schema: GraphQLSchema): string {
    const types = []
    const typesToIgnore = ['String', 'Int', 'Float', 'Boolean']

    for (const [name, graphqlType] of Object.entries(schema.getTypeMap())) {
      if (!name.startsWith('__') && !typesToIgnore.includes(name)) {
        types.push(...this.ts.createTypeDef(name, graphqlType))
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
