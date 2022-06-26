import { assertStrictEquals } from "../../deps.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";
import {
  Types,
  TypeScriptService,
} from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createScalarTypeDef: should render scalar type def", () => {
  // Arrange
  const service = buildContainer().get(TypeScriptService);
  const node = service.createTypeDef({
    type: Types.SCALAR,
    name: "Date",
    comment: undefined,
  });

  // Act
  const result = service.print([node!]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

export type Date = any & {
    __opaque: "Date";
};`,
  );
});

Deno.test("TypeScriptService::createScalarTypeDef: should render ID scalar type def", () => {
  // Arrange
  const service = buildContainer().get(TypeScriptService);
  const node = service.createTypeDef({
    type: Types.SCALAR,
    name: "ID",
    comment: undefined,
  });

  // Act
  const result = service.print([node!]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

export type ID = (string | number) & {
    __opaque: "ID";
};`,
  );
});
