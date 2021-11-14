import { assertStrictEquals } from "../dev-deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";

Deno.test("GraphQLEnumType::generate: should generate a schema", async () => {
  // Assert
  const schema = `
    enum Language {
      EN
    }

    enum Hello {
      HI
      HOWDY
    }

    type Query {
      hello(language: Language): Hello
    }`;
  const graphqlService = new GraphQLService();

  // Act
  const result = await graphqlService.generate(schema);

  // Assert
  assertStrictEquals(
    result.schema,
    `${typePrefix}

export enum Language {
    EN = "EN"
}

export enum Hello {
    HI = "HI",
    HOWDY = "HOWDY"
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    language?: Language;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello>>;
}`,
  );
});

Deno.test("GraphQLEnumType::generate: should generate a schema", async () => {
  // Assert
  const schema = `
    enum Language {
      EN
    }

    enum Hello {
      HI
      HOWDY
    }

    type Query {
      hello(language: Language): Hello
    }`;
  const graphqlService = new GraphQLService();

  // Act
  const result = await graphqlService.generateSchema(schema);

  // Assert
  assertStrictEquals(
    result,
    `${typePrefix}

export enum Language {
    EN = "EN"
}

export enum Hello {
    HI = "HI",
    HOWDY = "HOWDY"
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    language?: Language;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello>>;
}`,
  );
});

Deno.test(
  "GraphQLEnumType::generate: should handle enum type documentation",
  async () => {
    // Arrange
    const schema = `
      """
      Language enum.
      """
      enum Language {
        """
        EN enum field.
        """
        EN
      }

      """
      Hello enum.
      """
      enum Hello {
        """
        HI enum field.
        """
        HI
        """
        HOWDY enum field.
        """
        HOWDY
      }

      type Query {
        hello(language: Language): Hello
      }`;
    const graphqlService = new GraphQLService();

    // Act
    const result = await graphqlService.generateSchema(schema);

    // Assert
    assertStrictEquals(
      result,
      `${typePrefix}

/** Language enum. */
export enum Language {
    /** EN enum field. */
    EN = "EN"
}

/** Hello enum. */
export enum Hello {
    /** HI enum field. */
    HI = "HI",
    /** HOWDY enum field. */
    HOWDY = "HOWDY"
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    language?: Language;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<Hello>>;
}`,
    );
  },
);
