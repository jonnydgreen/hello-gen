import { assertStrictEquals } from "../dev-deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";

Deno.test(
  "GraphQLIInterfaceType::generateSchema: should handle interfaces types",
  async () => {
    // Arrange
    const schema = `
      interface Message {
        message: String
        action(command: String): String
      }

      type Hello implements Message {
        message: String
        wave: Boolean
        action(command: String): String
      }

      type Query {
        hello(message: String): Hello
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

/** Argument input type for MessageActionInput. */
export interface MessageActionInput {
    command?: string;
}

export interface Message {
    message?: string;
    action?(root: ParentType<Message>, args: MessageActionInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}

/** Argument input type for HelloActionInput. */
export interface HelloActionInput {
    command?: string;
}

export interface Hello {
    message?: string;
    wave?: boolean;
    action?(root: ParentType<Hello>, args: HelloActionInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
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
  "GraphQLIInterfaceType::generateSchema: should handle multiple implementations interfaces types",
  async () => {
    // Arrange
    const schema = `
      interface Message {
        message: String
      }

      interface Action {
        wave: Boolean
      }

      type Hello implements Message & Action {
        message: String
        wave: Boolean
        location: String
      }

      type Query {
        hello(message: String): Hello
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

export interface Message {
    message?: string;
}

export interface Action {
    wave?: boolean;
}

export interface Hello {
    message?: string;
    wave?: boolean;
    location?: string;
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

Deno.test("GraphQLIInterfaceType::generateSchema: should handle interfaces type documentation", async () => {
  // Arrange
  const schema = `
    """
    Message interface.
    """
    interface Message {
      """
      message field.
      """
      message: String
    }

    type Hello implements Message {
      message: String
      wave: Boolean
    }

    type Query {
      hello(message: String): Hello
    }`;
  const graphqlService = new GraphQLService();

  // Act
  const result = await graphqlService.generateSchema(schema);

  // Assert
  assertStrictEquals(
    result,
    `${typePrefix}

/** Message interface. */
export interface Message {
    /** message field. */
    message?: string;
}

export interface Hello {
    message?: string;
    wave?: boolean;
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
