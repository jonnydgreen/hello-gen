import { DecoratorTarget } from "./decorator_utils.d.ts";
declare function targetName(name: string): (target: DecoratorTarget, targetKey: string, index: number) => void;
export { targetName };
