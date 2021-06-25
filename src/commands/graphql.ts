import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import { promises as fs } from 'fs'

import { GraphQLService } from '../graphql'

export default class GraphQLCommand extends Command {
  static override description = 'describe the command here'

  static override examples = [
    `$ crackon graphql -i schema.graphql -o types.generated.ts
Generating types... done
Generated GraphQL types at 'types.generated.ts'
`
  ]

  static override flags = {
    help: flags.help({ char: 'h' }),
    input: flags.string({ char: 'i', description: 'File path to GraphQL schema.', required: true }),
    output: flags.string({ char: 'o', description: 'Output file path to write GraphQL schema to.', required: true })
  }

  async run (): Promise<void> {
    const { flags } = this.parse(GraphQLCommand)

    cli.action.start('Generating types')
    const graphql = new GraphQLService()

    // Read input
    const schema = await fs.readFile(flags.input)

    // Generate types from schema string
    const types = graphql.generateSchemaTypes(schema.toString())

    // Write output
    await fs.writeFile(flags.output, types)

    cli.action.stop('done')
    this.log(`Generated GraphQL types at '${flags.output}'`)
  }
}
