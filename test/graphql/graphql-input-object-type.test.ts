import { assertStrictEquals } from "../dev-deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";

Deno.test(
  "GraphQLInputObjectType::generateSchema: should handle input object types",
  async () => {
    // Arrange
    const schema = `
      input Message {
        text: String!
        encoded: Boolean
      }

      type Query {
        hello(message: Message): String
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);

Deno.test(
  "GraphQLInputObjectType::generateSchema: should handle input object type documentation",
  async () => {
    // Arrange
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

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
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
  },
);
