/* eslint-disable @typescript-eslint/no-floating-promises */

import t from "tap";

import { GraphQLService } from "../../src/graphql";
import { typePrefix } from "./setup";

t.test("GraphQLUnionType", (t) => {
  t.plan(2);

  t.test("should handle union types", async (t) => {
    t.plan(1);

    const schema = `
      type Hello {
        message: String
        wave: Boolean
      }

      type Goodbye {
        wave: Boolean
      }

      union Message = Hello | Goodbye

      type Query {
        hello(input: String): Message
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

export interface Hello {
    message?: string;
    wave?: boolean;
}

export interface Goodbye {
    wave?: boolean;
}

export type Message = Hello | Goodbye;

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Message>>;
}`,
    );
  });

  t.test("should handle documentation", async (t) => {
    t.plan(1);

    const schema = `
      type Hello {
        message: String
        wave: Boolean
      }

      type Goodbye {
        wave: Boolean
      }

      """
      Message union type.
      """
      union Message = Hello | Goodbye

      type Query {
        hello(input: String): Message
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

export interface Hello {
    message?: string;
    wave?: boolean;
}

export interface Goodbye {
    wave?: boolean;
}

/** Message union type. */
export type Message = Hello | Goodbye;

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Message>>;
}`,
    );
  });
});
