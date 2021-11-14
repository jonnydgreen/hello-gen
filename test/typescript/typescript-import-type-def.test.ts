import { assertStrictEquals } from "../../deps.ts";
import { TypeScriptService } from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createOpaqueTypeDef: should render import type def", () => {
  // Arrange
  const service = new TypeScriptService();
  const node = service.createImportTypeDef("some-module", "hello", "there");

  // Act
  const result = service.print([node]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

import { hello, there } from "some-module";`,
  );
});
