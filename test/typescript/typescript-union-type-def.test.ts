import { assertStrictEquals } from "../../deps.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";
import {
  Types,
  TypeScriptService,
} from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createUnionTypeDef: should render union type def", () => {
  // Arrange
  const service = buildContainer().get(TypeScriptService);
  const node = service.createTypeDef({
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
  const result = service.print([node!]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

export type TypeUnion = Type1 | Type2 | Type3;`,
  );
});
