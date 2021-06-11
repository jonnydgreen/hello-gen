import { Command, flags } from '@oclif/command'

class Crackon extends Command {
  static override description = 'describe the command here'

  static override flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' })
  }

  static override args = [{ name: 'file' }]

  async run (): Promise<void> {
    const { args, flags } = this.parse(Crackon)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from ./src/index.ts`)
    // istanbul ignore next
    if (typeof args['file'] === 'string' && args['file'] !== '' && flags.force) {
      this.log(`you input --force and --file: ${args['file']}`)
    }
  }
}

export = Crackon
