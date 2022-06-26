declare function optional(): <T>(target: import("./decorator_utils.d.ts").DecoratorTarget<unknown>, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<T> | undefined) => void;
export { optional };
