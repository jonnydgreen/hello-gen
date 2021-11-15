export interface CLICommandFlag {
  description: string;
  short: string;
  default?: string;
}

export type CLIInputFlags = Record<string, string>;

export interface CLICommand {
  name: string;
  description: string;
  examples: string[];
  flags: Record<string, CLICommandFlag>;
  run: (flags: CLIInputFlags) => Promise<void>;
}
