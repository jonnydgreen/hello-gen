export function assertNever(_input: never): never {
  throw new Error("Unhandled input.");
}
