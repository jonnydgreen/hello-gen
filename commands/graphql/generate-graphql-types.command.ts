import { IoC } from "deps";
import { GenerateGraphQLTypesService } from "../../services/graphql/index.ts";
import { CommandContract, CommandInput } from "../commands.type.ts";

@IoC.injectable()
export class GenerateGraphQLTypesCommand implements CommandContract {
  // TODO: see if we can use the constructor
  @IoC.inject(GenerateGraphQLTypesService)
  private readonly _generateGraphQLTypesService!: GenerateGraphQLTypesService;

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
  public run(input: CommandInput): Promise<void> {
    return this._generateGraphQLTypesService.generate(input);
  }
}
