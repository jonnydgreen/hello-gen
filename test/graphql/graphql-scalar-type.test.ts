/* eslint-disable @typescript-eslint/no-floating-promises */

import t from 'tap'

import { GraphQLService } from '../../src/graphql/'
import { typePrefix } from './setup'

t.test('GraphQLScalarType', t => {
  t.plan(8)

  t.test('should handle Int types', async t => {
    t.plan(1)

    const schema = `
      type Query {
        add(x: Int y: Int): Int
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<number>>;
}`)
  })

  t.test('should handle Float types', async t => {
    t.plan(1)

    const schema = `
      type Query {
        add(x: Float y: Float): Float
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<number>>;
}`)
  })

  t.test('should handle ID types', async t => {
    t.plan(1)

    const schema = `
      type Query {
        me(id: ID): ID
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

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
}`)
  })

  t.test('should handle String types', async t => {
    t.plan(1)

    const schema = `
      type Query {
        message(input: String): String
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

/** Argument input type for QueryMessageInput. */
export interface QueryMessageInput {
    input?: string;
}

export interface Query {
    message?(root: {}, args: QueryMessageInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<string>>;
}`)
  })

  t.test('should handle Boolean types', async t => {
    t.plan(1)

    const schema = `
      type Query {
        isTrue(input: Boolean): Boolean
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

/** Argument input type for QueryIsTrueInput. */
export interface QueryIsTrueInput {
    input?: boolean;
}

export interface Query {
    isTrue?(root: {}, args: QueryIsTrueInput, context: Context, info: GraphQLResolveInfo): MaybePromise<Maybe<boolean>>;
}`)
  })

  t.test('should handle custom scalar types', async t => {
    t.plan(1)

    const schema = `
      scalar CustomInt

      type Query {
        add(x: Int y: Int): CustomInt
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

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
}`)
  })

  t.test('should handle non-null types', async t => {
    t.plan(1)

    const schema = `
      type Query {
        add(x: Int! y: Int): Int!
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x: number;
    y?: number;
}

export interface Query {
    add(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): MaybePromise<number>;
}`)
  })

  t.test('should handle custom scalar type comments', async t => {
    t.plan(1)

    const schema = `
      """
      CustomInt scalar.
      """
      scalar CustomInt

      type Query {
        add(x: Int y: Int): CustomInt
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

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
}`)
  })
})
