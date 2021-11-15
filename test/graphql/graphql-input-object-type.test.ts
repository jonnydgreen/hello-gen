import { assertStrictEquals } from "../../deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";

Deno.test(
  "GraphQLInputObjectType::generateSchema: should handle input object types",
  () => {
    // Arrange
    const schema = `
      input Message {
        text: String!
        encoded: Boolean
      }

      type Query {
        hello(message: Message): String
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

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
  () => {
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
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

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
