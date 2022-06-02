import { ClassType } from "../lib/types.ts";

export interface CommandFlag {
  short: string;
  description: string;
  default?: string;
}

// TODO: make this generic
export type CommandInput = Record<string, string>

export interface CommandContract {
  name: string;
  description: string;
  flags: Record<string, CommandFlag>;
  subCommands: ClassType<CommandContract>[];
  run?(input: CommandInput): Promise<void>;
}
