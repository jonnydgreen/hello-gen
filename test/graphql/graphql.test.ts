/* eslint-disable @typescript-eslint/no-floating-promises */

import { GraphQLError, GraphQLObjectType } from 'graphql'
import { test } from 'tap'

import { GraphQLService } from '../../src/graphql/'

test('GraphQLService', t => {
  t.plan(3)

  t.test('constructor', t => {
    t.plan(1)

    t.test('should instantiate the class', t => {
      t.plan(1)

      const graphqlService = new GraphQLService()
      t.ok(graphqlService instanceof GraphQLService)
    })
  })

  t.test('getSchema', t => {
    t.plan(3)

    t.test('should get valid schema with no error', async t => {
      t.plan(2)

      const rawSchema = `type Query {
        add(x: Int y: Int): Int
      }`
      const graphqlService = new GraphQLService()
      const schema = graphqlService.getSchema(rawSchema)
      const fields = Object.keys((schema.getType('Query') as GraphQLObjectType).getFields())
      t.same(fields.length, 1)
      t.same(fields[0], 'add')
    })

    t.test('should error if invalid schema with no error', async t => {
      t.plan(1)

      const schema = `type Query {
        wrong!
      }`
      const graphqlService = new GraphQLService()
      try {
        graphqlService.getSchema(schema)
      } catch (error) {
        t.type(error, GraphQLError)
      }
    })

    t.test('should support extension types', async t => {
      t.plan(2)

      const rawSchema = `extend type Query {
        add(x: Int y: Int): Int
      }`
      const graphqlService = new GraphQLService()
      const schema = graphqlService.getSchema(rawSchema)
      const fields = Object.keys((schema.getType('Query') as GraphQLObjectType).getFields())
      t.same(fields.length, 1)
      t.same(fields[0], 'add')
    })
  })

  t.test('generateTypes', t => {
    t.plan(7)

    const typePrefix = `/* eslint-disable */

import { GraphQLResolveInfo } from "graphql";

import { MercuriusContext as Context } from "mercurius";

/** Marks a type as nullable. */
export type Maybe<T> = T | undefined;

/** Constructs a ParentType from an input type. */
export type ParentType<T> = {
    [TKey in keyof T]: T[TKey] extends (...args: any) => infer TReturn ? TReturn : T[TKey];
};`

    t.test('GraphQLScalarType', t => {
      t.plan(8)

      t.test('should handle Int types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            add(x: Int y: Int): Int
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): Maybe<number>;
}`)
      })

      t.test('should handle Float types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            add(x: Float y: Float): Float
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x?: number;
    y?: number;
}

export interface Query {
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): Maybe<number>;
}`)
      })

      t.test('should handle ID types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            me(id: ID): ID
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryMeInput. */
export interface QueryMeInput {
    id?: ID;
}

export interface Query {
    me?(root: {}, args: QueryMeInput, context: Context, info: GraphQLResolveInfo): Maybe<ID>;
}

/** The \`ID\` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as \`"4"\`) or integer (such as \`4\`) input value will be accepted as an ID. */
export type ID = (string | number) & {
    __opaque: "ID";
};`)
      })

      t.test('should handle String types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            message(input: String): String
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryMessageInput. */
export interface QueryMessageInput {
    input?: string;
}

export interface Query {
    message?(root: {}, args: QueryMessageInput, context: Context, info: GraphQLResolveInfo): Maybe<string>;
}`)
      })

      t.test('should handle Boolean types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            isTrue(input: Boolean): Boolean
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryIsTrueInput. */
export interface QueryIsTrueInput {
    input?: boolean;
}

export interface Query {
    isTrue?(root: {}, args: QueryIsTrueInput, context: Context, info: GraphQLResolveInfo): Maybe<boolean>;
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
        const result = graphqlService.generateTypes(schema)
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
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): Maybe<CustomInt>;
}`)
      })

      t.test('should handle non-null types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            add(x: Int! y: Int): Int!
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryAddInput. */
export interface QueryAddInput {
    x: number;
    y?: number;
}

export interface Query {
    add(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): number;
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
        const result = graphqlService.generateTypes(schema)
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
    add?(root: {}, args: QueryAddInput, context: Context, info: GraphQLResolveInfo): Maybe<CustomInt>;
}`)
      })
    })

    t.test('GraphQLEnumType', t => {
      t.plan(2)

      t.test('should handle enum types', async t => {
        t.plan(1)

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
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

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
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello>;
}`)
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
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

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
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello>;
}`)
      })
    })

    t.test('GraphQLObjectType', t => {
      t.plan(2)

      t.test('should handle object types', async t => {
        t.plan(1)

        const schema = `
          type Hello {
            message: String
            wave: Boolean
            tellJoke(input: String!): String
          }

          type Query {
            hello(message: String): Hello
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for HelloTellJokeInput. */
export interface HelloTellJokeInput {
    input: string;
}

export interface Hello {
    message?: string;
    wave?: boolean;
    tellJoke?(root: ParentType<Hello>, args: HelloTellJokeInput, context: Context, info: GraphQLResolveInfo): Maybe<string>;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    message?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello>;
}`)
      })

      t.test('should handle object type documentation', async t => {
        t.plan(1)

        const schema = `
          """
          Hello type.
          """
          type Hello {
            """
            message field.
            """
            message: String
            """
            wave field.
            """
            wave: Boolean
            """
            tellJoke field resolver.
            """
            tellJoke(
              """
              input string.
              """
              input: String!
            ): String
          }

          """
          Query type.
          """
          type Query {
            """
            hello query field.
            """
            hello(
              """
              message input string.
              """
              message: String
            ): Hello
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for HelloTellJokeInput. */
export interface HelloTellJokeInput {
    /** input string. */
    input: string;
}

/** Hello type. */
export interface Hello {
    /** message field. */
    message?: string;
    /** wave field. */
    wave?: boolean;
    /** tellJoke field resolver. */
    tellJoke?(root: ParentType<Hello>, args: HelloTellJokeInput, context: Context, info: GraphQLResolveInfo): Maybe<string>;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    /** message input string. */
    message?: string;
}

/** Query type. */
export interface Query {
    /** hello query field. */
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello>;
}`)
      })
    })

    t.test('GraphQLInputObjectType', t => {
      t.plan(2)

      t.test('should handle input object types', async t => {
        t.plan(1)

        const schema = `
          input Message {
            text: String!
            encoded: Boolean
          }

          type Query {
            hello(message: Message): String
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

export interface Message {
    text: string;
    encoded?: boolean;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    message?: Message;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<string>;
}`)
      })

      t.test('should handle input object type documentation', async t => {
        t.plan(1)

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
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

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
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<string>;
}`)
      })
    })

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
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for MessageActionInput. */
export interface MessageActionInput {
    command?: string;
}

export interface Message {
    message?: string;
    action?(root: ParentType<Message>, args: MessageActionInput, context: Context, info: GraphQLResolveInfo): Maybe<string>;
}

/** Argument input type for HelloActionInput. */
export interface HelloActionInput {
    command?: string;
}

export interface Hello {
    message?: string;
    wave?: boolean;
    action?(root: ParentType<Hello>, args: HelloActionInput, context: Context, info: GraphQLResolveInfo): Maybe<string>;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    message?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello>;
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
        const result = graphqlService.generateTypes(schema)
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
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello>;
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
        const result = graphqlService.generateTypes(schema)
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
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello>;
}`)
      })
    })

    t.test('GraphQLUnionType', t => {
      t.plan(2)

      t.test('should handle union types', async t => {
        t.plan(1)

        const schema = `
          type Hello {
            message: String
            wave: Boolean
          }

          type Goodbye {
            wave: Boolean
          }

          union Message = Hello | Goodbye

          type Query {
            hello(input: String): Message
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

export interface Hello {
    message?: string;
    wave?: boolean;
}

export interface Goodbye {
    wave?: boolean;
}

export type Message = Hello | Goodbye;

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Message>;
}`)
      })

      t.test('should handle documentation', async t => {
        t.plan(1)

        const schema = `
          type Hello {
            message: String
            wave: Boolean
          }

          type Goodbye {
            wave: Boolean
          }

          """
          Message union type.
          """
          union Message = Hello | Goodbye

          type Query {
            hello(input: String): Message
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

export interface Hello {
    message?: string;
    wave?: boolean;
}

export interface Goodbye {
    wave?: boolean;
}

/** Message union type. */
export type Message = Hello | Goodbye;

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Message>;
}`)
      })
    })

    t.test('GraphQLList', t => {
      t.plan(7)

      t.test('should handle nullable list, non-null entry types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            hello(input: String): [String!]
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<string[]>;
}`)
      })

      t.test('should handle mandatory list and entry types', async t => {
        t.plan(1)

        const schema = `
          type Query {
            hello(input: String): [String!]!
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): string[];
}`)
      })

      t.test('should handle mandatory list and nullable entry types', t => {
        t.plan(1)

        const schema = `
          type Query {
            hello(input: String): [String]!
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<string>[];
}`)
      })

      t.test('should handle nullable list and nullable entry types', t => {
        t.plan(1)

        const schema = `
          type Query {
            hello(input: String): [String]
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Maybe<string>[]>;
}`)
      })

      t.test('should handle union elements in lists', t => {
        t.plan(1)

        const schema = `
          type Hello {
            message: String
          }

          type Goodbye {
            message: String
            wave: Boolean
          }

          union Message = Hello | Goodbye

          type Query {
            hello(input: String): [Message]
            nonNullElementHello(input: String): [Message!]
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

export interface Hello {
    message?: string;
}

export interface Goodbye {
    message?: string;
    wave?: boolean;
}

export type Message = Hello | Goodbye;

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

/** Argument input type for QueryNonNullElementHelloInput. */
export interface QueryNonNullElementHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Maybe<Message>[]>;
    nonNullElementHello?(root: {}, args: QueryNonNullElementHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Message[]>;
}`)
      })

      t.test('should handle enum elements in lists', t => {
        t.plan(1)

        const schema = `
          enum Hello {
            HI
            HOWDY
          }

          type Query {
            hello(input: String): [Hello]
            nonNullElementHello(input: String): [Hello!]
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

export enum Hello {
    HI = "HI",
    HOWDY = "HOWDY"
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

/** Argument input type for QueryNonNullElementHelloInput. */
export interface QueryNonNullElementHelloInput {
    input?: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Maybe<Hello>[]>;
    nonNullElementHello?(root: {}, args: QueryNonNullElementHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello[]>;
}`)
      })

      t.test('should handle list documentation', async t => {
        t.plan(1)

        const schema = `
          """
          Hello type.
          """
          type Hello {
            """
            message field.
            """
            message: String
          }
          type Query {
            hello(input: String): [Hello]
            nonNullElementHello(input: String!): [Hello!]
          }`
        const graphqlService = new GraphQLService()
        const result = graphqlService.generateTypes(schema)
        t.same(result, `${typePrefix}

/** Hello type. */
export interface Hello {
    /** message field. */
    message?: string;
}

/** Argument input type for QueryHelloInput. */
export interface QueryHelloInput {
    input?: string;
}

/** Argument input type for QueryNonNullElementHelloInput. */
export interface QueryNonNullElementHelloInput {
    input: string;
}

export interface Query {
    hello?(root: {}, args: QueryHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Maybe<Hello>[]>;
    nonNullElementHello?(root: {}, args: QueryNonNullElementHelloInput, context: Context, info: GraphQLResolveInfo): Maybe<Hello[]>;
}`)
      })
    })
  })
})
