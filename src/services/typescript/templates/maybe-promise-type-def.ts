import { ts } from "../../../../deps.ts";
import { withComment } from "../../../lib/index.ts";

export function createMaybePromiseTypeDef(factory: ts.NodeFactory) {
  return withComment(
    "Marks a type as a nullable Promise.",
    factory.createTypeAliasDeclaration(
      undefined,
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createIdentifier("MaybePromise"),
      [factory.createTypeParameterDeclaration(
        factory.createIdentifier("T"),
        undefined,
        undefined,
      )],
      factory.createUnionTypeNode([
        factory.createTypeReferenceNode(
          factory.createIdentifier("Promise"),
          [factory.createTypeReferenceNode(
            factory.createIdentifier("T"),
            undefined,
          )],
        ),
        factory.createTypeReferenceNode(
          factory.createIdentifier("T"),
          undefined,
        ),
      ]),
    ),
  );
}
