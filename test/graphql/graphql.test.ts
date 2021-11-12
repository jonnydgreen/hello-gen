/* eslint-disable @typescript-eslint/no-floating-promises */

import t from "tap";
import { GraphQLError, GraphQLObjectType } from "graphql";

import { GraphQLService } from "../../src/graphql/";

t.test("GraphQLService", (t) => {
  t.plan(2);

  t.test("constructor", (t) => {
    t.plan(1);

    t.test("should instantiate the class", (t) => {
      t.plan(1);

      const graphqlService = new GraphQLService();
      t.ok(graphqlService instanceof GraphQLService);
    });
  });

  t.test("getSchema", (t) => {
    t.plan(3);

    t.test("should get valid schema with no error", async (t) => {
      t.plan(2);

      const rawSchema = `type Query {
        add(x: Int y: Int): Int
      }`;
      const graphqlService = new GraphQLService();
      const schema = graphqlService.getSchema(rawSchema);
      const fields = Object.keys(
        (schema.getType("Query") as GraphQLObjectType).getFields(),
      );
      t.same(fields.length, 1);
      t.same(fields[0], "add");
    });

    t.test("should error if invalid schema with no error", async (t) => {
      t.plan(1);

      const schema = `type Query {
        wrong!
      }`;
      const graphqlService = new GraphQLService();
      try {
        graphqlService.getSchema(schema);
      } catch (error) {
        t.type(error, GraphQLError);
      }
    });

    t.test("should support extension types", async (t) => {
      t.plan(2);

      const rawSchema = `extend type Query {
        add(x: Int y: Int): Int
      }`;
      const graphqlService = new GraphQLService();
      const schema = graphqlService.getSchema(rawSchema);
      const fields = Object.keys(
        (schema.getType("Query") as GraphQLObjectType).getFields(),
      );
      t.same(fields.length, 1);
      t.same(fields[0], "add");
    });
  });
});
