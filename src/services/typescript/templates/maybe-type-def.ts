import { ts } from "../../../../deps.ts";
import { withComment } from "../../../lib/index.ts";

/**
 * Create Maybe type definition.
 */
export function createMaybeTypeDef(factory: ts.NodeFactory): ts.Node {
  return withComment(
    "Marks a type as nullable.",
    factory.createTypeAliasDeclaration(
      undefined,
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createIdentifier("Maybe"),
      [factory.createTypeParameterDeclaration(
        factory.createIdentifier("T"),
        undefined,
        undefined,
      )],
      factory.createUnionTypeNode([
        factory.createTypeReferenceNode(
          factory.createIdentifier("T"),
          undefined,
        ),
        factory.createKeywordTypeNode(
          ts.SyntaxKind.UndefinedKeyword,
        ),
      ]),
    ),
  );
}
