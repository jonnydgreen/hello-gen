import {d as devAssert} from "../../common/devAssert-57a6c5bb.js";
import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import {visitInParallel, visit} from "../language/visitor.js";
import {assertValidSchema} from "../type/validate.js";
import {TypeInfo as TypeInfo2, visitWithTypeInfo} from "../utilities/TypeInfo.js";
import {s as specifiedRules, z as specifiedSDLRules} from "../../common/specifiedRules-2f4e8060.js";
import {ValidationContext as ValidationContext2, SDLValidationContext} from "./ValidationContext.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../../common/inspect-3f8aaeec.js";
import "../language/ast.js";
import "../language/kinds.js";
import "../utilities/typeComparators.js";
import "../../common/definition-c28e27a3.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../type/assertName.js";
import "../type/directives.js";
import "../language/directiveLocation.js";
import "../type/scalars.js";
import "../type/introspection.js";
import "../utilities/astFromValue.js";
import "../../common/isIterableObject-93462344.js";
import "../type/schema.js";
import "../utilities/typeFromAST.js";
import "../language/predicates.js";
import "../utilities/sortValueNode.js";
import "../execution/collectFields.js";
import "../execution/values.js";
import "../../common/coerceInputValue-d674a53b.js";
import "../utilities/valueFromAST.js";
function validate2(schema2, documentAST, rules = specifiedRules, options, typeInfo = new TypeInfo2(schema2)) {
  var _options$maxErrors;
  const maxErrors = (_options$maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors) !== null && _options$maxErrors !== void 0 ? _options$maxErrors : 100;
  documentAST || devAssert(false, "Must provide document.");
  assertValidSchema(schema2);
  const abortObj = Object.freeze({});
  const errors = [];
  const context = new ValidationContext2(schema2, documentAST, typeInfo, (error) => {
    if (errors.length >= maxErrors) {
      errors.push(new GraphQLError("Too many validation errors, error limit reached. Validation aborted."));
      throw abortObj;
    }
    errors.push(error);
  });
  const visitor2 = visitInParallel(rules.map((rule) => rule(context)));
  try {
    visit(documentAST, visitWithTypeInfo(typeInfo, visitor2));
  } catch (e) {
    if (e !== abortObj) {
      throw e;
    }
  }
  return errors;
}
function validateSDL(documentAST, schemaToExtend, rules = specifiedSDLRules) {
  const errors = [];
  const context = new SDLValidationContext(documentAST, schemaToExtend, (error) => {
    errors.push(error);
  });
  const visitors = rules.map((rule) => rule(context));
  visit(documentAST, visitInParallel(visitors));
  return errors;
}
function assertValidSDL(documentAST) {
  const errors = validateSDL(documentAST);
  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join("\n\n"));
  }
}
function assertValidSDLExtension(documentAST, schema2) {
  const errors = validateSDL(documentAST, schema2);
  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join("\n\n"));
  }
}
export {assertValidSDL, assertValidSDLExtension, validate2 as validate, validateSDL};
export default null;
