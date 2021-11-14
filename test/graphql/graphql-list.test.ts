import { assertStrictEquals } from "../../src/deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";

Deno.test(
  "GraphQLList::generateSchema: should handle nullable list, non-null entry types",
  async () => {
    // Arrange
    const schema = `
      type Query {
        hello(input: String): [String!]
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLList::generateSchema: should handle mandatory list and entry types",
  async () => {
    // Arrange
    const schema = `
      type Query {
        hello(input: String): [String!]!
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLList::generateSchema: should handle mandatory list and nullable entry types",
  async () => {
    // Arrange
    const schema = `
      type Query {
        hello(input: String): [String]!
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLList::generateSchema: should handle nullable list and nullable entry types",
  async () => {
    // Arrange
    const schema = `
      type Query {
        hello(input: String): [String]
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLList::generateSchema: should handle union elements in lists",
  async () => {
    // Arrange
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

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLList::generateSchema: should handle enum elements in lists",
  async () => {
    // Arrange
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

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLList::generateSchema: should handle list documentation",
  async () => {
    // Arrange
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

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);
