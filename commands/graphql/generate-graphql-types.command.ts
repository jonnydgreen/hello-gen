import { IoC } from "deps";
import { CommandContract, CommandInput } from "../commands.type.ts";

@IoC.injectable()
export class GenerateGraphQLTypesCommand implements CommandContract {
  public name = "types";

  public description = "Generates GraphQL Types from an input schema";

  public examples = [
    `$ hello-gen graphql types
Generating types... done
Generated GraphQL types at 'types.generated.ts'
`,
  ];

  public flags = {
    schema: {
      description: "File path to GraphQL schema.",
      short: "s",
      default: "schema.graphql",
    },
    output: {
      description: "Output file path to write to.",
      short: "o",
      default: "types.generated.ts",
    },
  };

  public subCommands = [];

  // TODO: proper type
  public async run(input: CommandInput): Promise<void> {
    console.log("Generating GraphQL types");

    await Promise.resolve(input);

    console.log(`Generated GraphQL types at '${input.output}'`);
    // TODO: errors
  }
}
