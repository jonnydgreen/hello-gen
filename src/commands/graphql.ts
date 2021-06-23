import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import { promises as fs } from 'fs'

import { GraphQL } from '../graphql'

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

  static override args = [{ name: 'file' }]

  async run (): Promise<void> {
    const { args, flags } = this.parse(GraphQLCommand)

    cli.action.start('Generating types')
    const graphql = new GraphQL()

    // Read input
    const rawSchema = await fs.readFile(flags.input)

    // Generate types from schema
    const schema = graphql.getSchema(rawSchema.toString())
    const types = graphql.generateTypes(schema)

    // Write output
    await fs.writeFile(flags.output, types)
    cli.action.stop('done')
    this.log(`Generated GraphQL types at '${flags.output}'`)

    // istanbul ignore next
    if (typeof args['file'] === 'string' && args['file'] !== '') {
      this.log(`you input --file: ${args['file']}`)
    }
  }
}
