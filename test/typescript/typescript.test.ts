import { assert } from "../../src/deps.ts";
import { TypeScriptService } from "../../src/services/typescript/index.ts";

Deno.test(
  "TypeScriptService::constructor: should instantiate the class",
  () => {
    // Arrange and Act
    const typescriptService = new TypeScriptService();

    // Assert
    assert(typescriptService instanceof TypeScriptService);
  },
);
