/* eslint-disable @typescript-eslint/no-floating-promises */

import t from 'tap'

import { GraphQLService } from '../../src/graphql'
import { typePrefix } from './setup'

t.test('GraphQLEnumType', t => {
  t.plan(2)

  t.test('should handle enum types', async t => {
    t.plan(2)

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
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generate(schema)

    t.test('should generate a schema', t => {
      t.plan(1)

      t.same(result.schema, `${typePrefix}

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
}`)
    })

    t.test('should generate resolvers', t => {
      t.plan(2)

      const { resolvers } = result

      t.same(Object.keys(resolvers), ['QueryResolver'])
      t.same(resolvers['QueryResolver'], `/* eslint-disable */

import { GraphQLResolveInfo } from "graphql";

import { Maybe, MaybePromise, Query, QueryHelloInput } from "../types";

export class QueryResolver implements Query {
    async hello(_root: any, _args: any, _context: any, _info: GraphQLResolveInfo): Promise<Maybe<Hello>> { }
}`)
    })
  })

  t.test('should handle enum type documentation', async t => {
    t.plan(1)

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
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generate(schema)
    t.same(result.schema, `${typePrefix}

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
}`)
  })
})
