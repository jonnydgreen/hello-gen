import { ts } from "../../../deps.ts";
import { Maybe, MaybeNull } from "../../lib/index.ts";

export function createParameterDeclaration(
  factory: ts.NodeFactory,
  name: string,
  type: ts.TypeNode,
): ts.ParameterDeclaration {
  return factory.createParameterDeclaration(
    undefined,
    undefined,
    undefined,
    factory.createIdentifier(name),
    undefined,
    type,
    undefined,
  );
}

/**
 * Attach a comment to a node.
 */
export function withComment<TNode extends ts.Node>(
  description: MaybeNull<string>,
  node: TNode,
): TNode {
  if (typeof description === "string") {
    // We need to serialise this to a JSDoc comment
    const serialisedDescription = `* ${description.trim()} `;
    return ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      serialisedDescription,
      true,
    );
  }
  return node;
}

/**
 * Create Maybe type node.
 */
export function createMaybeTypeNode(
  factory: ts.NodeFactory,
  node: ts.TypeNode,
  nullable: boolean,
): ts.TypeNode {
  if (nullable) {
    return factory.createTypeReferenceNode(
      factory.createIdentifier("Maybe"),
      [node],
    );
  }
  return node;
}

/**
 * Create MaybePromise type node.
 */
export function createMaybePromiseTypeNode(
  factory: ts.NodeFactory,
  node: ts.TypeNode,
  promise: boolean,
): ts.TypeNode {
  if (promise) {
    return factory.createTypeReferenceNode(
      factory.createIdentifier("MaybePromise"),
      [node],
    );
  }
  return node;
}

/**
 * Create nullable token.
 */
export function createNullableToken(
  factory: ts.NodeFactory,
  nullable: boolean,
): Maybe<ts.PunctuationToken<ts.SyntaxKind.QuestionToken>> {
  return nullable
    ? factory.createToken(ts.SyntaxKind.QuestionToken)
    : undefined;
}
