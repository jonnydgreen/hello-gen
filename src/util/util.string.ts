export function upperFirst (input: string): string {
  return `${input[0]?.toUpperCase() ?? ''}${input.slice(1)}`
}
