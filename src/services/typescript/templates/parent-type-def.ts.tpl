/** Constructs a ParentType from an input type. */
export type ParentType<T> = {
    [TKey in keyof T]: T[TKey] extends (...args: any) => infer TReturn ? TReturn : T[TKey];
};