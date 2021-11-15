import { ts } from "../../../../deps.ts";

/**
 * Create context type definition.
 */
export function createContextTypeDef(factory: ts.NodeFactory): ts.Node {
  const moduleName = "mercurius";
  const moduleContextName = "MercuriusContext";
  return factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([factory.createImportSpecifier(
        factory.createIdentifier(moduleContextName),
        factory.createIdentifier("Context"),
      )]),
    ),
    factory.createStringLiteral(moduleName),
  );
}
