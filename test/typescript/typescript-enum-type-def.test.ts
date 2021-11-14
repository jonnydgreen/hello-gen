import { assertStrictEquals } from "../../deps.ts";
import {
  Types,
  TypeScriptService,
} from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createEnumTypeDef: should render enum type def", () => {
  // Arrange
  const service = new TypeScriptService();
  const node = service.createTypeDef({
    type: Types.ENUM,
    name: "HelloEnum",
    values: [
      { name: "value1", comment: undefined },
      { name: "value2", comment: undefined },
    ],
    comment: undefined,
  });

  // Act
  const result = service.print([node!]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

export enum HelloEnum {
    value1 = "value1",
    value2 = "value2"
}`,
  );
});
