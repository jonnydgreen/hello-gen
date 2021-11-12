import { Command, flags } from '@oclif/command'
import { IConfig } from '@oclif/config'
import cli from 'cli-ux'
import * as path from 'path'

import { GraphQLService } from '../../graphql'
import { readFile, writeFiles } from '../../util/'

export default class GraphQLTypesCommand extends Command {
  private readonly graphql: GraphQLService

  constructor (argv: string[], config: IConfig) {
    super(argv, config)

    this.graphql = new GraphQLService()
  }

  static override description = 'Generates GraphQL server files from an input schema'

  static override examples = [
    `$ hello-gen graphql
Generating GraphQL server... done
Generated GraphQL server
`
  ]

  static override flags = {
    help: flags.help({ char: 'h' }),
    input: flags.string({ char: 'i', description: 'File path to GraphQL schema.', default: 'schema.graphql' }),
    output: flags.string({ char: 'o', description: 'Output directory write to.', required: true })
  }

  async run (): Promise<void> {
    cli.action.start('Generating GraphQL server')

    // Parse input command
    const { flags } = this.parse(GraphQLTypesCommand)

    // Read input path and get contents
    const rawSchema = await readFile(flags.input)

    // Generate types from schema string
    const { schema, resolvers } = this.graphql.generate(rawSchema)

    // Build files to write to
    const files: Record<string, string> = {}
    const schemaTypePath = path.resolve(flags.output, 'types', 'types.generated.ts')
    files[schemaTypePath] = schema
    for (const [resolverName, resolver] of Object.entries(resolvers)) {
      const resolverPath = path.resolve(flags.output, 'resolvers', `${resolverName}.generated.ts`)
      files[resolverPath] = resolver
    }

    // Write output
    await writeFiles(files)

    cli.action.stop('done')
    this.log('Generated GraphQL server')
  }
}
