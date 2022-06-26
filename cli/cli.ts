import { Cliffy, IoC } from "deps";
import { buildContainer } from "ioc/index.ts";
import { CommandContract, commands } from "../commands/index.ts";
import { ClassType } from "../lib/types.ts";

// TODO: load into container?
export class CLI extends Cliffy.Command {
  constructor(private readonly _container: IoC.Container) {
    super();

    this.#setupRootCommand();

    for (const serviceIdentifier of commands) {
      this.#setupSubCommand(serviceIdentifier);
    }
  }

  // TODO: rearrange
  #setupSubCommand(
    serviceIdentifier: ClassType<CommandContract>,
    program: Cliffy.Command = this,
  ): Cliffy.Command {
    const commandInstance = this._container.get<CommandContract>(
      serviceIdentifier,
    );
    const { name, description, flags, run, subCommands } = commandInstance;
    const command = new Cliffy.Command();
    const showHelp = this.#showHelp.bind(command);
    const action = run?.bind(commandInstance) as Cliffy.IAction ?? showHelp;

    // Setup sub-commands
    if (subCommands.length > 0) {
      for (const subCommandServiceIdentifier of subCommands) {
        this.#setupSubCommand(subCommandServiceIdentifier, command);
      }
    }

    // Register command
    program.command(
      name,
      command,
    );

    command
      .description(description)
      .helpOption(false)
      .option(
        "-h, --help",
        "Print help information.",
        { standalone: true, action: showHelp },
      ).action(action);

    // Setup command options
    for (const [flagName, flagDefinition] of Object.entries(flags)) {
      command.option(
        `-${flagDefinition.short}, --${flagName} [${flagName}]`,
        flagDefinition.description,
        { default: flagDefinition.default },
      );
    }

    return command;
  }

  #setupRootCommand(): void {
    const showHelp = this.#showHelp.bind(this);
    const showVersion = this.#showVersion.bind(this);
    this.name("hello-gen")
      .description("A toolkit for all your backend development needs.")
      // Version
      .version("1.0.0")
      .versionOption("-V, --version", "Print version information.", showVersion)
      // Help
      .helpOption(false)
      .option(
        "-h, --help",
        "Print help information.",
        { standalone: true, action: showHelp },
      )
      .action(showHelp)
      // TODO: create private helper method
      // Log Level
      .type(
        "log-level",
        new Cliffy.EnumType(["debug", "info", "warn", "error"]),
      )
      .globalEnv("HELLO_GEN_LOG_LEVEL=<level:log-level>", "Set log level.")
      .globalOption("-l, --log-level <level:log-level>", "Set log level.", {
        default: "info" as const,
      })
      // Format
      .type(
        "format",
        new Cliffy.EnumType(["json"]),
      )
      .globalEnv(
        "HELLO_GEN_FORMAT=<format:format>",
        "Set the format for printing command output resources.",
      )
      .globalOption(
        "-f, --format <format:format>",
        "Set the format for printing command output resources.",
        {
          default: "json" as const,
        },
      );
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
  const container = buildContainer();

  const cli = new CLI(container);

  await cli.parse(cliArguments);
}
