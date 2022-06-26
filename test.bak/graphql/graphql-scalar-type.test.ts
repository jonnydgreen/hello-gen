import { assertStrictEquals } from "../../deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";

Deno.test("GraphQLScalarType::generateSchema: should handle Int types", () => {
  // Arrange
  const schema = `
    type Query {
      add(x: Int y: Int): Int
    }`;
  const graphqlService = buildContainer().get(GraphQLService);

  // Act
  const result = graphqlService.generateSchema(schema);

  // Assert
  assertStrictEquals(
    result,
    `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<number>>;
}`,
  );
});

Deno.test(
  "GraphQLScalarType::generateSchema: should handle Float types",
  () => {
    // Arrange
    const schema = `
      type Query {
        add(x: Float y: Float): Float
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<number>>;
}`,
    );
  },
);

Deno.test("GraphQLScalarType::generateSchema: should handle ID types", () => {
  // Arrange
  const schema = `
    type Query {
      me(id: ID): ID
    }`;
  const graphqlService = buildContainer().get(GraphQLService);

  // Act
  const result = graphqlService.generateSchema(schema);

  // Assert
  assertStrictEquals(
    result,
    `${typePrefix}

/** The \`ID\` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \`"4"\`) or integer (such as \`4\`) input value will be accepted as an ID. */
export type ID = (string | number) & {
    __opaque: "ID";
};

/** Argument input type for QueryMeInput. */
export interface QueryMeInput {
    id?: ID;
}

export interface Query {
    me?(root: {}, args: QueryMeInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<ID>>;
}`,
  );
});

Deno.test(
  "GraphQLScalarType::generateSchema: should handle String types",
  () => {
    // Arrange
    const schema = `
      type Query {
        message(input: String): String
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

/** Argument input type for QueryMessageInput. */
export interface QueryMessageInput {
    input?: string;
}

export interface Query {
    message?(root: {}, args: QueryMessageInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}`,
    );
  },
);

Deno.test(
  "GraphQLScalarType::generateSchema: should handle Boolean types",
  () => {
    // Arrange
    const schema = `
      type Query {
        isTrue(input: Boolean): Boolean
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

/** Argument input type for QueryIsTrueInput. */
export interface QueryIsTrueInput {
    input?: boolean;
}

export interface Query {
    isTrue?(root: {}, args: QueryIsTrueInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<boolean>>;
}`,
    );
  },
);

Deno.test(
  "GraphQLScalarType::generateSchema: should handle custom scalar types",
  () => {
    // Arrange
    const schema = `
      scalar CustomInt

      type Query {
        add(x: Int y: Int): CustomInt
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

export type CustomInt = any & {
    __opaque: "CustomInt";
};

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<CustomInt>>;
}`,
    );
  },
);

Deno.test(
  "GraphQLScalarType::generateSchema: should handle non-null types",
  () => {
    // Arrange
    const schema = `
      type Query {
        add(x: Int! y: Int): Int!
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x: number;
    y?: number;
}

export interface Query {
    add(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<number>;
}`,
    );
  },
);

Deno.test(
  "GraphQLScalarType::generateSchema: should handle custom scalar type comments",
  () => {
    // Arrange
    const schema = `
      """
      CustomInt scalar.
      """
      scalar CustomInt

      type Query {
        add(x: Int y: Int): CustomInt
      }`;
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

/** CustomInt scalar. */
export type CustomInt = any & {
    __opaque: "CustomInt";
};

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<CustomInt>>;
}`,
    );
  },
);
