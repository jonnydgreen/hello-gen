import { assertStrictEquals } from "../dev-deps.ts";
import {
  Types,
  TypeScriptService,
} from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createUnionTypeDef: should render union type def", async () => {
  // Arrange
  const service = new TypeScriptService();
  const node = await service.createTypeDef({
    type: Types.UNION,
    name: "TypeUnion",
    comment: undefined,
    types: [
      { name: "Type1" },
      { name: "Type2" },
      { name: "Type3" },
    ],
  });

  // Act
  const result = await service.print([node!]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

export type TypeUnion = Type1 | Type2 | Type3;`,
  );
});
