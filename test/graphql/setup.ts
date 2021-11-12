export const typePrefix = `/* eslint-disable */

import { GraphQLResolveInfo } from "graphql";

import { MercuriusContext as Context } from "mercurius";

/** Marks a type as nullable. */
export type Maybe<T> = T | undefined;

/** Marks a type as a nullable Promise. */
export type MaybePromise<T> = Promise<T> | T;

/** Constructs a ParentType from an input type. */
export type ParentType<T> = {
    [TKey in keyof T]: T[TKey] extends (...args: any) => infer TReturn ? TReturn : T[TKey];
};`
