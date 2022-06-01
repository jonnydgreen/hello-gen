import { commands } from "../commands/index.ts";
import { Cliffy } from "../deps.ts";

class CLI extends Cliffy.Command {
  constructor() {
    super();

    const showHelp = this.#showHelp.bind(this);
    const showVersion = this.#showVersion.bind(this);
    this.name("hello-gen")
      .description("A toolkit for all your backend development needs.")
      // Version
      .version("1.0.0")
      .versionOption("-V, --version", "Print version information.", showVersion)
      // Help
      .helpOption("-h, --help", "Print help information.", showHelp)
      .action(showHelp)
      // Log Level
      .type(
        "log-level",
        new Cliffy.EnumType(["debug", "info", "warn", "error"]),
      )
      .globalEnv("LOG_LEVEL=<level:log-level>", "Set log level.")
      .globalOption("-l, --log-level <level:log-level>", "Set log level.", {
        default: "info" as const,
      })
  }

  #showHelp(): void {
    console.error(this.getHelp());
  }

  #showVersion(): void {
    console.error(`${this.getName()} ${this.getVersion()}`);
  }
}

// TODO: tidy up
export async function cli(cliArguments: string[]): Promise<void> {
  const cli = new CLI();

  for (const commandClass of commands) {
    const commandDefinition = new commandClass();
    cli.command(commandDefinition.name);
  }

  await cli.parse(cliArguments);
}
