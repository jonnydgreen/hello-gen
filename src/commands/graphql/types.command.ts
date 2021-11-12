import type { CLICommand, CLIInputFlags } from "../types.ts";
import { GraphQLService } from '../../services/graphql/index.ts'
import { readFile, writeFiles } from "../../lib/util/util.fs.ts";

export class GraphQLTypesCommand implements CLICommand {
  private graphQLService: GraphQLService

  constructor() {
    this.graphQLService = new GraphQLService()
  }

  public name = "graphql:types";

  public description = "Generates GraphQL Types from an input schema";

  public examples = [
    `$ hello-gen graphql:types
Generating types... done
Generated GraphQL types at 'types.generated.ts'
`,
  ];

  public flags = {
    input: {
      description: "File path to GraphQL schema.",
      short: "i",
      default: "schema.graphql",
    },
    output: {
      description: "Output file path to write to.",
      short: "o",
      default: "types.generated.ts",
    },
  };

  async run(flags: CLIInputFlags): Promise<void> {
    try {
      console.log("Generating GraphQL types");
  
      // TODO: single command
      // Read input path and get contents
      const schema = await readFile(flags.input);
  
      // Generate types from schema string
      const types = this.graphQLService.generateSchema(schema);
  
      // Write output
      await writeFiles({ [flags.output]: types });

      // const files: Record<string, string> = {};
      // const schemaTypePath = path.resolve(
      //   flags.output,
      //   "types",
      //   "types.generated.ts",
      // );
      // files[schemaTypePath] = schema;
      // for (const [resolverName, resolver] of Object.entries(resolvers)) {
      //   const resolverPath = path.resolve(
      //     flags.output,
      //     "resolvers",
      //     `${resolverName}.generated.ts`,
      //   );
      //   files[resolverPath] = resolver;
      // }
  
      console.log(`Generated GraphQL types at '${flags.output}'`);
    } catch (error) {
      console.log(error)
    }
  }
}
