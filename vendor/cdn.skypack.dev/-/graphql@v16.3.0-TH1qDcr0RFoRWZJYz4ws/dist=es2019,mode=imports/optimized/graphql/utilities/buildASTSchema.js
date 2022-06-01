import {d as devAssert} from "../../common/devAssert-57a6c5bb.js";
import {Kind} from "../language/kinds.js";
import {parse} from "../language/parser.js";
import {specifiedDirectives} from "../type/directives.js";
import {GraphQLSchema} from "../type/schema.js";
import {assertValidSDL} from "../validation/validate.js";
import {extendSchemaImpl} from "./extendSchema.js";
import "../error/syntaxError.js";
import "../../common/GraphQLError-be1f809e.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../language/ast.js";
import "../language/directiveLocation.js";
import "../language/lexer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/tokenKind.js";
import "../language/source.js";
import "../../common/inspect-3f8aaeec.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/definition-c28e27a3.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../type/assertName.js";
import "../type/scalars.js";
import "../type/introspection.js";
import "./astFromValue.js";
import "../../common/isIterableObject-93462344.js";
import "../type/validate.js";
import "./typeComparators.js";
import "./TypeInfo.js";
import "./typeFromAST.js";
import "../../common/specifiedRules-2f4e8060.js";
import "../language/predicates.js";
import "./sortValueNode.js";
import "../execution/collectFields.js";
import "../execution/values.js";
import "../../common/coerceInputValue-d674a53b.js";
import "./valueFromAST.js";
import "../validation/ValidationContext.js";
function buildASTSchema(documentAST, options) {
  documentAST != null && documentAST.kind === Kind.DOCUMENT || devAssert(false, "Must provide valid Document AST.");
  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    assertValidSDL(documentAST);
  }
  const emptySchemaConfig = {
    description: void 0,
    types: [],
    directives: [],
    extensions: Object.create(null),
    extensionASTNodes: [],
    assumeValid: false
  };
  const config = extendSchemaImpl(emptySchemaConfig, documentAST, options);
  if (config.astNode == null) {
    for (const type of config.types) {
      switch (type.name) {
        case "Query":
          config.query = type;
          break;
        case "Mutation":
          config.mutation = type;
          break;
        case "Subscription":
          config.subscription = type;
          break;
      }
    }
  }
  const directives2 = [
    ...config.directives,
    ...specifiedDirectives.filter((stdDirective) => config.directives.every((directive) => directive.name !== stdDirective.name))
  ];
  return new GraphQLSchema({...config, directives: directives2});
}
function buildSchema(source2, options) {
  const document = parse(source2, {
    noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
    allowLegacyFragmentVariables: options === null || options === void 0 ? void 0 : options.allowLegacyFragmentVariables
  });
  return buildASTSchema(document, {
    assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  });
}
export {buildASTSchema, buildSchema};
export default null;
