import { run } from "./src/commands/index.ts";
import { handleCLIError } from "./src/lib/index.ts";

run(Deno.args).catch(handleCLIError);
