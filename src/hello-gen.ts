import { run } from "./commands/index.ts";
import { handleCLIError } from "./lib/index.ts";

run(Deno.args).catch(handleCLIError);
