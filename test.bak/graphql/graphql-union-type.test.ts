import { assertStrictEquals } from "../../deps.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";
import { typePrefix } from "./setup.ts";

Deno.test("GraphQLUnionType::generateSchema: should handle union types", () => {
  // Arrange
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
  const graphqlService = buildContainer().get(GraphQLService);

  // Act
  const result = graphqlService.generateSchema(schema);

  // Assert
  assertStrictEquals(
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

Deno.test(
  "GraphQLUnionType::generateSchema: should handle documentation",
  () => {
    // Arrange
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
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Arrange
    assertStrictEquals(
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
  },
);
