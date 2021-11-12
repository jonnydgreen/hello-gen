/* eslint-disable @typescript-eslint/no-floating-promises */

import t from 'tap'

import { GraphQLService } from '../../src/graphql'
import { typePrefix } from './setup'

t.test('GraphQLRootType', t => {
  t.plan(2)

  t.test('should handle when there no root type', t => {
    t.plan(1)

    const schema = `
        type Hello {
          hi: String
        }
      `
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)

    t.same(result, `${typePrefix}

export interface Hello {
    hi?: string;
}`)
  })

  t.test('should correctly order root type inputs', t => {
    t.plan(1)

    const schema = `
        type Query {
          hi(input: String): String
        }

        type Mutation {
          hello(wave: Boolean): String
        }
      `
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)

    t.same(result, `${typePrefix}

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
}`)
  })
})
