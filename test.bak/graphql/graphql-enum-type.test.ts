import { assertStrictEquals } from "../../deps.ts";
import { typePrefix } from "./setup.ts";
import { GraphQLService } from "../../src/services/graphql/index.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";

Deno.test("GraphQLEnumType::generate: should generate a schema", () => {
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
  const graphqlService = buildContainer().get(GraphQLService);

  // Act
  const result = graphqlService.generate(schema);

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

Deno.test("GraphQLEnumType::generate: should generate a schema", () => {
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
  const graphqlService = buildContainer().get(GraphQLService);

  // Act
  const result = graphqlService.generateSchema(schema);

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
  () => {
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
    const graphqlService = buildContainer().get(GraphQLService);

    // Act
    const result = graphqlService.generateSchema(schema);

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
