/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from "tap";
import { TypeScriptService } from "../../src/typescript/";

test("TypeScriptService", (t) => {
  t.plan(1);

  t.test("constructor", (t) => {
    t.plan(1);

    t.test("should instantiate the class", (t) => {
      t.plan(1);

      const typescriptService = new TypeScriptService();
      t.ok(typescriptService instanceof TypeScriptService);
    });
  });
});
