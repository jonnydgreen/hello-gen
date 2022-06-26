import { assertEquals, assertSnapshot, Mocking, Testing } from "test.deps";
import { Colours } from "deps";
import { cli } from "cli/index.ts";

Testing.describe("Generate GraphQL", () => {
  Testing.beforeEach(() => {
    Mocking.restore();
  });

  [
    {
      name:
        "should display help text to stderr when no arguments or flags are passed",
      args: ["graphql"],
    },
    {
      name: "should display help text to stderr when passing the '--help' flag",
      args: ["graphql", "--help"],
    },
    {
      name: "should display help text to stderr when passing the '-h' flag",
      args: ["graphql", "-h"],
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
});
