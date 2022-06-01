export interface CommandContract {
  name: string;
  action(): Promise<void>
}
