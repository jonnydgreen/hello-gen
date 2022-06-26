import { assertEquals, assertSnapshot, Mocking, Testing } from "test.deps";
import { Colours } from "deps";
import { cli } from "cli/index.ts";
import { withTestContext } from "../utils.ts";

Testing.describe("Generate GraphQL Types", () => {
  Testing.beforeEach(() => {
    Mocking.restore();
  });

  [
    {
      name: "should display help text to stderr when passing the '--help' flag",
      args: ["graphql", "types", "--help"],
    },
    {
      name: "should display help text to stderr when passing the '-h' flag",
      args: ["graphql", "types", "-h"],
    },
  ].forEach((definition) => {
    Testing.it(definition.name, async (t) => {
      // Arrange
      const args = definition.args;
      const consoleErrorSpy = Mocking.stub(console, "error");
      const consoleLogSpy = Mocking.stub(console, "log");

      // Act
      await cli(args);

      // Assert
      assertEquals(
        consoleLogSpy.callCount,
        0,
        `console.log should not be called. Called ${consoleLogSpy.callCount} times`,
      );
      assertEquals(
        consoleErrorSpy.callCount,
        1,
        `console.error should be called once. Called ${consoleErrorSpy.callCount} times`,
      );
      assertEquals(
        consoleErrorSpy.getCall(0).args.length,
        1,
        `console.error should be called with a single argument. Called with ${
          consoleErrorSpy.getCall(0).args.length
        } arguments`,
      );
      await assertSnapshot(
        t,
        Colours.stripColor(consoleErrorSpy.getCall(0).args[0]),
      );
    });
  });

  [
    {
      name: "should generate Query types",
      args: ["graphql", "types"],
      schema: `
        type Query {
          hello: String
          helloMandatory: String!
        }
      `,
      schemaPath: "schema.graphql",
      outputPath: "types.generated.ts",
    },
    {
      name: "should generate Mutation types",
      args: ["graphql", "types"],
      schema: `
        type Mutation {
          hello: String
          helloMandatory: String!
        }
      `,
      schemaPath: "schema.graphql",
      outputPath: "types.generated.ts",
    },
    {
      name: "should generate Subscription types",
      args: ["graphql", "types"],
      schema: `
        type Subscription {
          hello: String
          helloMandatory: String!
        }
      `,
      schemaPath: "schema.graphql",
      outputPath: "types.generated.ts",
    },
    {
      name: "should generate Object types",
      args: ["graphql", "types"],
      schema: `
        type Message {
          id: String!
          text: String
        }
      `,
      schemaPath: "schema.graphql",
      outputPath: "types.generated.ts",
    },
  ].forEach((definition) => {
    Testing.it(
      definition.name,
      withTestContext(async (t) => {
        // Arrange
        await Deno.writeTextFile(definition.schemaPath, definition.schema);
        const args = definition.args;

        // Act
        await cli(args);

        // Assert
        await assertSnapshot(t, await Deno.readTextFile(definition.outputPath));
      }),
    );
  });
});
