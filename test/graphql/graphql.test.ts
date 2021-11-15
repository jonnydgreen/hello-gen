import { assert, assertEquals, assertThrows } from "../../deps.ts";
import { GraphQLError, GraphQLObjectType } from "../../src/../deps.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";

Deno.test("GraphQLService::constructor: should instantiate the class", () => {
  // Arrange and Act
  const graphqlService = buildContainer().get(GraphQLService);

  // Assert
  assert(graphqlService instanceof GraphQLService);
});

Deno.test(
  "GraphQLService::getSchema: should get valid schema with no error",
  () => {
    // Arrange
    const rawSchema = `
      type Query {
        add(x: Int y: Int): Int
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const schema = graphqlService.getSchema(rawSchema);
    const fields = Object.keys(
      (schema.getType("Query") as GraphQLObjectType).getFields(),
    );

    // Arrange
    assertEquals(fields, ["add"]);
  },
);

Deno.test(
  "GraphQLService::getSchema: should error if invalid schema with no error",
  () => {
    // Arrange
    const schema = `
      type Query {
        wrong!
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act and Assert
    assertThrows(
      () => graphqlService.getSchema(schema),
      GraphQLError,
      "Syntax Error",
    );
  },
);

Deno.test("GraphQLService::getSchema: should support extension types", () => {
  // Arrange
  const rawSchema = `
    extend type Query {
      add(x: Int y: Int): Int
    }`;
  const graphqlService = buildContainer().get(GraphQLService);

  // Act
  const schema = graphqlService.getSchema(rawSchema);
  const fields = Object.keys(
    (schema.getType("Query") as GraphQLObjectType).getFields(),
  );

  // Assert
  assertEquals(fields, ["add"]);
});
