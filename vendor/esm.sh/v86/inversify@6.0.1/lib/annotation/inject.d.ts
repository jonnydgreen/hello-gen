declare const inject: <T = unknown>(serviceIdentifier: import("./lazy_service_identifier.d.ts").ServiceIdentifierOrFunc<T>) => (target: import("./decorator_utils.d.ts").DecoratorTarget<unknown>, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<any> | undefined) => void;
export { inject };
