import { TemplateEngineContract } from "../template-engine.type.ts";

export class TypeScriptTemplateEngine implements TemplateEngineContract {
  public render(): string {
    return "TYPESCRIPT";
  }
}
