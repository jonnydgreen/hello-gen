import {Kind} from "../language/kinds.js";
import {w as isAbstractType} from "../../common/definition-c28e27a3.js";
import {GraphQLSkipDirective, GraphQLIncludeDirective} from "../type/directives.js";
import {typeFromAST as typeFromAST2} from "../utilities/typeFromAST.js";
import {getDirectiveValues} from "./values.js";
import "../../common/devAssert-57a6c5bb.js";
import "../../common/inspect-3f8aaeec.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/GraphQLError-be1f809e.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../language/ast.js";
import "../type/assertName.js";
import "../language/directiveLocation.js";
import "../type/scalars.js";
import "../../common/coerceInputValue-d674a53b.js";
import "../../common/isIterableObject-93462344.js";
import "../utilities/valueFromAST.js";
function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
  const fields = new Map();
  collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, new Set());
  return fields;
}
function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
  const subFieldNodes = new Map();
  const visitedFragmentNames = new Set();
  for (const node of fieldNodes) {
    if (node.selectionSet) {
      collectFieldsImpl(schema, fragments, variableValues, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }
  return subFieldNodes;
}
function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (const selection of selectionSet.selections) {
    switch (selection.kind) {
      case Kind.FIELD: {
        if (!shouldIncludeNode(variableValues, selection)) {
          continue;
        }
        const name = getFieldEntryKey(selection);
        const fieldList = fields.get(name);
        if (fieldList !== void 0) {
          fieldList.push(selection);
        } else {
          fields.set(name, [selection]);
        }
        break;
      }
      case Kind.INLINE_FRAGMENT: {
        if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
          continue;
        }
        collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
        break;
      }
      case Kind.FRAGMENT_SPREAD: {
        const fragName = selection.name.value;
        if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
          continue;
        }
        visitedFragmentNames.add(fragName);
        const fragment = fragments[fragName];
        if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
          continue;
        }
        collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
        break;
      }
    }
  }
}
function shouldIncludeNode(variableValues, node) {
  const skip = getDirectiveValues(GraphQLSkipDirective, node, variableValues);
  if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
    return false;
  }
  const include = getDirectiveValues(GraphQLIncludeDirective, node, variableValues);
  if ((include === null || include === void 0 ? void 0 : include.if) === false) {
    return false;
  }
  return true;
}
function doesFragmentConditionMatch(schema, fragment, type) {
  const typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  const conditionalType = typeFromAST2(schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if (isAbstractType(conditionalType)) {
    return schema.isSubType(conditionalType, type);
  }
  return false;
}
function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
export {collectFields, collectSubfields};
export default null;
