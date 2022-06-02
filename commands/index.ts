import { ClassType } from "../lib/types.ts";
import { CommandContract } from "./commands.type.ts";
import { GenerateGraphQLCommand } from "./graphql/index.ts";

export * from "./commands.type.ts";

export const commands: ClassType<CommandContract>[] = [GenerateGraphQLCommand];
