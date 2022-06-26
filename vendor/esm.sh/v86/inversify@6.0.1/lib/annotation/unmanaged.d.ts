import { DecoratorTarget } from "./decorator_utils.d.ts";
declare function unmanaged(): (target: DecoratorTarget, targetKey: string, index: number) => void;
export { unmanaged };
