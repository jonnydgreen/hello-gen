import { Command, flags } from '@oclif/command'
import { IConfig } from '@oclif/config'
import cli from 'cli-ux'

import { GraphQLService } from '../../graphql'
import { readFile, writeFiles } from '../../util/'

export default class GraphQLTypesCommand extends Command {
  private readonly graphql: GraphQLService

  constructor (argv: string[], config: IConfig) {
    super(argv, config)

    this.graphql = new GraphQLService()
  }

  static override description = 'Generates GraphQL resolvers from an input schema'

  static override examples = [
    `$ crackon graphql:resolvers
Generating resolvers... done
Generated GraphQL resolvers
`
  ]

  static override flags = {
    help: flags.help({ char: 'h' }),
    input: flags.string({ char: 'i', description: 'File path to GraphQL schema.', default: 'schema.graphql' }),
    output: flags.string({ char: 'o', description: 'Output directory to write GraphQL resolvers to.', default: '.' })
  }

  async run (): Promise<void> {
    cli.action.start('Generating GraphQL resolvers')

    // Parse input command
    const { flags } = this.parse(GraphQLTypesCommand)

    // Read input path and get contents
    const schema = await readFile(flags.input)

    // Generate types from schema string
    const types = this.graphql.generateSchemaTypes(schema)

    // Write output
    await writeFiles({ [flags.output]: types })

    cli.action.stop('done')
    this.log(`Generated GraphQL resolvers at '${flags.output}'`)
  }
}
