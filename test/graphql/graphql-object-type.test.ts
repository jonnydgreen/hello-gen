/* eslint-disable @typescript-eslint/no-floating-promises */

import t from "tap";

import { GraphQLService } from "../../src/graphql";
import { typePrefix } from "./setup";

t.test("GraphQLObjectType", (t) => {
  t.plan(3);

  t.test("should handle object types", async (t) => {
    t.plan(1);

    const schema = `
      type Hello {
        message: String
        wave: Boolean
        tellJoke(input: String!): String
      }

      type Query {
        hello(message: String): Hello
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Argument input type for HelloTellJokeInput. */
export interface HelloTellJokeInput {
    input: string;
}

export interface Hello {
    message?: string;
    wave?: boolean;
    tellJoke?(root: ParentType<Hello>, args: HelloTellJokeInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    message?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello>>;
}`,
    );
  });

  t.test("should handle type extensions", async (t) => {
    t.plan(1);

    const schema = `
      """
      Hello type.
      """
      type Hello {
        message: String
        wave: Boolean
      }

      extend type Hello {
        jump: Boolean!
        tellJoke(input: String!): String
      }

      type Query {
        hello(message: String): Hello
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Argument input type for HelloTellJokeInput. */
export interface HelloTellJokeInput {
    input: string;
}

/** Hello type. */
export interface Hello {
    message?: string;
    wave?: boolean;
    jump: boolean;
    tellJoke?(root: ParentType<Hello>, args: HelloTellJokeInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    message?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello>>;
}`,
    );
  });

  t.test("should handle object type documentation", async (t) => {
    t.plan(1);

    const schema = `
      """
      Hello type.
      """
      type Hello {
        """
        message field.
        """
        message: String
        """
        wave field.
        """
        wave: Boolean
        """
        tellJoke field resolver.
        """
        tellJoke(
          """
          input string.
          """
          input: String!
        ): String
      }

      """
      Query type.
      """
      type Query {
        """
        hello query field.
        """
        hello(
          """
          message input string.
          """
          message: String
        ): Hello
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Argument input type for HelloTellJokeInput. */
export interface HelloTellJokeInput {
    /** input string. */
    input: string;
}

/** Hello type. */
export interface Hello {
    /** message field. */
    message?: string;
    /** wave field. */
    wave?: boolean;
    /** tellJoke field resolver. */
    tellJoke?(root: ParentType<Hello>, args: HelloTellJokeInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    /** message input string. */
    message?: string;
}

/** Query type. */
export interface Query {
    /** hello query field. */
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello>>;
}`,
    );
  });
});
