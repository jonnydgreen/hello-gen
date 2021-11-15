import { CLIError } from "./error.ts";

export function handleCLIError(error: Error): void {
  if (error instanceof CLIError) {
    Deno.exit(error.exitCode);
  } else {
    Deno.exit(-1);
  }
}
