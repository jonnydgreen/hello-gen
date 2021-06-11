import { Command, flags } from '@oclif/command'

export default class Hello extends Command {
  static override description = 'describe the command here'

  static override examples = [
    `$ crackon hello
hello world from ./src/hello.ts!
`
  ]

  static override flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' })
  }

  static override args = [{ name: 'file' }]

  async run (): Promise<void> {
    const { args, flags } = this.parse(Hello)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from ./src/commands/hello.ts`)

    // istanbul ignore next
    if (typeof args['file'] === 'string' && args['file'] !== '' && flags.force) {
      this.log(`you input --force and --file: ${args['file']}`)
    }
  }
}
