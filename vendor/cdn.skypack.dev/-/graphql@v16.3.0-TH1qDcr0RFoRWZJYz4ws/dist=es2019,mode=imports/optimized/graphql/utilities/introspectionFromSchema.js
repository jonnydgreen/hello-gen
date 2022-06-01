import {i as invariant} from "../../common/location-1f330233.js";
import {parse} from "../language/parser.js";
import {a as executeSync} from "../../common/execute-2127bc1b.js";
import {getIntrospectionQuery as getIntrospectionQuery2} from "./getIntrospectionQuery.js";
import "../error/syntaxError.js";
import "../../common/GraphQLError-be1f809e.js";
import "../language/printLocation.js";
import "../language/ast.js";
import "../language/directiveLocation.js";
import "../language/kinds.js";
import "../language/lexer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/tokenKind.js";
import "../language/source.js";
import "../../common/devAssert-57a6c5bb.js";
import "../../common/inspect-3f8aaeec.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/isIterableObject-93462344.js";
import "../../common/coerceInputValue-d674a53b.js";
import "../../common/definition-c28e27a3.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../type/assertName.js";
import "../error/locatedError.js";
import "../type/introspection.js";
import "./astFromValue.js";
import "../type/scalars.js";
import "../type/validate.js";
import "./typeComparators.js";
import "../type/directives.js";
import "../type/schema.js";
import "../execution/collectFields.js";
import "./typeFromAST.js";
import "../execution/values.js";
import "./valueFromAST.js";
function introspectionFromSchema(schema2, options) {
  const optionsWithDefaults = {
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true,
    ...options
  };
  const document = parse(getIntrospectionQuery2(optionsWithDefaults));
  const result = executeSync({
    schema: schema2,
    document
  });
  !result.errors && result.data || invariant(false);
  return result.data;
}
export {introspectionFromSchema};
export default null;
