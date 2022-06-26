import { IoC } from "deps";
import { CommandContract } from "../commands.type.ts";
import { GenerateGraphQLTypesCommand } from "./generate-graphql-types.command.ts";

@IoC.injectable()
export class GenerateGraphQLCommand implements CommandContract {
  public name = "graphql";

  public description = "GraphQL Generation functionality using an input schema";

  public examples = [
    `$ hello-gen graphql types
Generating types... done
Generated GraphQL types at 'types.generated.ts'
`,
  ];

  public flags = {};

  public subCommands = [GenerateGraphQLTypesCommand];
}
