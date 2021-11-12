/* eslint-disable @typescript-eslint/no-floating-promises */

import t from "tap";

import { GraphQLService } from "../../src/graphql";
import { typePrefix } from "./setup";

t.test("GraphQLInputObjectType", (t) => {
  t.plan(2);

  t.test("should handle input object types", async (t) => {
    t.plan(1);

    const schema = `
      input Message {
        text: String!
        encoded: Boolean
      }

      type Query {
        hello(message: Message): String
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

export interface Message {
    text: string;
    encoded?: boolean;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    message?: Message;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}`,
    );
  });

  t.test("should handle input object type documentation", async (t) => {
    t.plan(1);

    const schema = `
      """
      Message input.
      """
      input Message {
        """
        text field.
        """
        text: String!
        """
        encoded field.
        """
        encoded: Boolean
      }

      type Query {
        hello(
          """
          message input.
          """
          message: Message): String
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Message input. */
export interface Message {
    /** text field. */
    text: string;
    /** encoded field. */
    encoded?: boolean;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    /** message input. */
    message?: Message;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}`,
    );
  });
});
