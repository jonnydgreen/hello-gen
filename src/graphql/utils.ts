export function assertNever (_input: never): never {
  throw new Error('Unhandled input.')
}

export function upperFirst (input: string): string {
  return `${input[0]?.toUpperCase() ?? ''}${input.slice(1)}`
}
