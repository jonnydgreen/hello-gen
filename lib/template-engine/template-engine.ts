import { TemplateEngineContract } from "./template-engine.type.ts";
import { TypeScriptTemplateEngine } from "./typescript-template-engine/index.ts";

export class TemplateEngine {
  #engine: TemplateEngineContract;

  constructor() {
    this.#engine = new TypeScriptTemplateEngine();
  }

  public render(): string {
    return this.#engine.render();
  }
}
