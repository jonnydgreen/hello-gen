import { Testing, assertSnapshot } from "test.deps";
import { cli } from "cli/index.ts";
import { withSetup } from "../utils.ts";

Testing.describe("Generate GraphQL Types", () => {
  Testing.it(
    "should Generate GraphQL Types",
    withSetup(async (t) => {
      // Arrange
      const args: string[] = [
        "graphql",
        "types",
      ];

      // Act
      await cli(args);
      
      // Assert
      const typesFile = await Deno.readTextFile("types.ts")
      await assertSnapshot(t, typesFile)
    }),
  );
});
