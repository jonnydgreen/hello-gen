import { assertStrictEquals } from "../../deps.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";
import { TypeScriptService } from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createClassDef: should render class type def", () => {
  // Arrange
  const service = buildContainer().get(TypeScriptService);
  const nodes = service.createClassDef({
    imports: [["some-module", "hello", "there"]],
    name: "QueryResolver",
    implementation: "Resolver",
    methods: [],
  });

  // Act
  const result = service.print(nodes);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

import { hello, there } from "some-module";

export class QueryResolver implements Resolver {
}`,
  );
});
