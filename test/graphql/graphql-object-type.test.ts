import { assertStrictEquals } from "../../deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";

Deno.test(
  "GraphQLObjectType::generateSchema: should handle object types",
  () => {
    // Arrange
    const schema = `
      type Hello {
        message: String
        wave: Boolean
        tellJoke(input: String!): String
      }

      type Query {
        hello(message: String): Hello
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLObjectType::generateSchema: should handle type extensions",
  () => {
    // Arrange
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
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLObjectType::generateSchema: should handle object type documentation",
  () => {
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
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);
