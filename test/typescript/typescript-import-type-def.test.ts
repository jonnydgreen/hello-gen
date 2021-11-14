import { assertStrictEquals } from "../dev-deps.ts";
import { TypeScriptService } from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createOpaqueTypeDef: should render import type def", async () => {
  // Arrange
  const service = new TypeScriptService();
  const node = service.createImportTypeDef("some-module", { name: "hello" }, {
    name: "there",
  });

  // Act
  const result = await service.print([node]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

import { hello, there } from "some-module";`,
  );
});
