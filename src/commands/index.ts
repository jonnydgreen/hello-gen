import { Command } from "../../deps.ts";
import { buildContainer } from "../ioc/index.ts";
import { GraphQLTypesCommand } from "./graphql/types.command.ts";
import type { CLICommand } from "./types.ts";

export async function run(args: string[]): Promise<void> {
  try {
    // Setup program
    let program = new Command()
      .name("hello-gen")
      .version("0.1.0")
      .description(
        "Hello-gen in a generator CLI for all your development needs.",
      );

    // Build container
    const container = buildContainer();

    const serviceIdentifiers = [GraphQLTypesCommand];
    for (const serviceIdentifier of serviceIdentifiers) {
      const command: CLICommand = container.get(serviceIdentifier);

      // Setup command
      program = program.command(command.name).description(command.description)
        .action((flags: Record<string, string>) => {
          return command.run(flags);
        });

      // Setup command options
      for (const [flagName, flagDefinition] of Object.entries(command.flags)) {
        program.option(
          `-${flagDefinition.short}, --${flagName} [${flagName}]`,
          flagDefinition.description,
          { default: flagDefinition.default },
        );
      }
    }

    // Parse program
    await program.parse(args);
  } catch (error) {
    console.log(`An error occurred during execution.`, error);
  }
}
