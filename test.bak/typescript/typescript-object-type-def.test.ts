import { assertStrictEquals } from "../../deps.ts";
import { buildContainer } from "../../src/ioc/ioc.config.ts";
import {
  FieldTypes,
  Types,
  TypeScriptService,
} from "../../src/services/typescript/index.ts";

Deno.test("TypeScriptService::createObjectTypeDef: should render object type with Object type fields", () => {
  // Arrange
  const service = buildContainer().get(TypeScriptService);
  const node = service.createTypeDef({
    type: Types.OBJECT,
    name: "Hello",
    comment: undefined,
    fields: [
      {
        type: FieldTypes.OBJECT,
        name: "field1",
        comment: undefined,
        nullable: false,
        typeName: "Field1",
        promise: false,
        args: [],
        argsInputName: "",
      },
      {
        type: FieldTypes.OBJECT,
        name: "nullable",
        comment: undefined,
        nullable: true,
        typeName: "Field2",
        promise: false,
        args: [],
        argsInputName: "",
      },
      {
        type: FieldTypes.OBJECT,
        name: "promise",
        comment: undefined,
        nullable: false,
        typeName: "Field3",
        promise: true,
        args: [],
        argsInputName: "",
      },
    ],
  });

  // Act
  const result = service.print([node!]);

  // Assert
  assertStrictEquals(
    result,
    `/* eslint-disable */

export interface Hello {
    field1: Field1;
    nullable?: Field2;
    promise: MaybePromise<Field3>;
}`,
  );
});
