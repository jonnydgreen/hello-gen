/** Marks a type as a nullable Promise. */
export type MaybePromise<T> = Promise<T> | T;