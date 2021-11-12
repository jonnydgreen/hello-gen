/* eslint-disable @typescript-eslint/no-floating-promises */

import t from "tap";

import { GraphQLService } from "../../src/graphql";
import { typePrefix } from "./setup";

t.test("GraphQLList", (t) => {
  t.plan(7);

  t.test("should handle nullable list, non-null entry types", async (t) => {
    t.plan(1);

    const schema = `
      type Query {
        hello(input: String): [String!]
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string[]>>;
}`,
    );
  });

  t.test("should handle mandatory list and entry types", async (t) => {
    t.plan(1);

    const schema = `
      type Query {
        hello(input: String): [String!]!
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<string[]>;
}`,
    );
  });

  t.test("should handle mandatory list and nullable entry types", (t) => {
    t.plan(1);

    const schema = `
      type Query {
        hello(input: String): [String]!
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>[]>;
}`,
    );
  });

  t.test("should handle nullable list and nullable entry types", (t) => {
    t.plan(1);

    const schema = `
      type Query {
        hello(input: String): [String]
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Maybe<string>[]>>;
}`,
    );
  });

  t.test("should handle union elements in lists", (t) => {
    t.plan(1);

    const schema = `
      type Hello {
        message: String
      }

      type Goodbye {
        message: String
        wave: Boolean
      }

      union Message = Hello | Goodbye

      type Query {
        hello(input: String): [Message]
        nonNullElementHello(input: String): [Message!]
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

export interface Hello {
    message?: string;
}

export interface Goodbye {
    message?: string;
    wave?: boolean;
}

export type Message = Hello | Goodbye;

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

/** Argument input type for QueryNonNullElementHelloInput. */
export interface QueryNonNullElementHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Maybe<Message>[]>>;
    nonNullElementHello?(root: {}, args: QueryNonNullElementHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Message[]>>;
}`,
    );
  });

  t.test("should handle enum elements in lists", (t) => {
    t.plan(1);

    const schema = `
      enum Hello {
        HI
        HOWDY
      }

      type Query {
        hello(input: String): [Hello]
        nonNullElementHello(input: String): [Hello!]
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

export enum Hello {
    HI = "HI",
    HOWDY = "HOWDY"
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

/** Argument input type for QueryNonNullElementHelloInput. */
export interface QueryNonNullElementHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Maybe<Hello>[]>>;
    nonNullElementHello?(root: {}, args: QueryNonNullElementHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello[]>>;
}`,
    );
  });

  t.test("should handle list documentation", async (t) => {
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
      }
      type Query {
        hello(input: String): [Hello]
        nonNullElementHello(input: String!): [Hello!]
      }`;
    const graphqlService = new GraphQLService();
    const result = graphqlService.generateSchema(schema);
    t.same(
      result,
      `${typePrefix}

/** Hello type. */
export interface Hello {
    /** message field. */
    message?: string;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

/** Argument input type for QueryNonNullElementHelloInput. */
export interface QueryNonNullElementHelloInput {
    input: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Maybe<Hello>[]>>;
    nonNullElementHello?(root: {}, args: QueryNonNullElementHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello[]>>;
}`,
    );
  });
});
