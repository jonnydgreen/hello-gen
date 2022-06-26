import { assert } from "../../deps.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";
import { TypeScriptService } from "../../src/services/typescript/index.ts";

Deno.test(
  "TypeScriptService::constructor: should instantiate the class",
  () => {
    // Arrange and Act
    const typescriptService = buildContainer().get(TypeScriptService);

    // Assert
    assert(typescriptService instanceof TypeScriptService);
  },
);
