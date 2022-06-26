import { assertStrictEquals } from "../../deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";

Deno.test(
  "GraphQLRootType::generateSchema: should handle when there no root type",
  () => {
    // Arrange
    const schema = `
      type Hello {
        hi: String
      }
    `;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Arrange
    assertStrictEquals(
      result,
      `${typePrefix}

export interface Hello {
    hi?: string;
}`,
    );
  },
);

Deno.test(
  "GraphQLRootType::generateSchema: should correctly order root type inputs",
  () => {
    // Arrange
    const schema = `
      type Query {
        hi(input: String): String
      }

      type Mutation {
        hello(wave: Boolean): String
      }
    `;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Arrange
    assertStrictEquals(
      result,
      `${typePrefix}

/** Argument input type for QueryHiInput. */
export interface QueryHiInput {
    input?: string;
}

/** Argument input type for MutationHelloInput. */
export interface MutationHelloInput {
    wave?: boolean;
}

export interface Query {
    hi?(root: {}, args: QueryHiInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}

export interface Mutation {
    hello?(root: {}, args: MutationHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}`,
    );
  },
);
