/* eslint-disable @typescript-eslint/no-floating-promises */

import t from 'tap'

import { GraphQLService } from '../../src/graphql'
import { typePrefix } from './setup'

t.test('GraphQLIInterfaceType', t => {
  t.plan(3)

  t.test('should handle interfaces types', async t => {
    t.plan(1)

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
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

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
}`)
  })

  t.test('should handle multiple implementations interfaces types', async t => {
    t.plan(1)

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
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

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
}`)
  })

  t.test('should handle interfaces type documentation', async t => {
    t.plan(1)

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
      }`
    const graphqlService = new GraphQLService()
    const result = graphqlService.generateSchema(schema)
    t.same(result, `${typePrefix}

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
}`)
  })
})
