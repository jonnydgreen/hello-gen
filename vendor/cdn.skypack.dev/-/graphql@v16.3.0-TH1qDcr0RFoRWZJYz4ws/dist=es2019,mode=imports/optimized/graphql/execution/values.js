import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {s as isInputType, q as isNonNullType, $ as keyMap} from "../../common/definition-c28e27a3.js";
import {c as coerceInputValue, b as printPathArray} from "../../common/coerceInputValue-d674a53b.js";
import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import {Kind} from "../language/kinds.js";
import {print} from "../language/printer.js";
import {typeFromAST as typeFromAST2} from "../utilities/typeFromAST.js";
import {valueFromAST as valueFromAST2} from "../utilities/valueFromAST.js";
import "../../common/devAssert-57a6c5bb.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../type/assertName.js";
import "../language/characterClasses.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../../common/isIterableObject-93462344.js";
import "../language/blockString.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../language/ast.js";
function getVariableValues(schema, varDefNodes, inputs, options) {
  const errors = [];
  const maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;
  try {
    const coerced = coerceVariableValues(schema, varDefNodes, inputs, (error) => {
      if (maxErrors != null && errors.length >= maxErrors) {
        throw new GraphQLError("Too many errors processing variables, error limit reached. Execution aborted.");
      }
      errors.push(error);
    });
    if (errors.length === 0) {
      return {
        coerced
      };
    }
  } catch (error) {
    errors.push(error);
  }
  return {
    errors
  };
}
function coerceVariableValues(schema, varDefNodes, inputs, onError) {
  const coercedValues = {};
  for (const varDefNode of varDefNodes) {
    const varName = varDefNode.variable.name.value;
    const varType = typeFromAST2(schema, varDefNode.type);
    if (!isInputType(varType)) {
      const varTypeStr = print(varDefNode.type);
      onError(new GraphQLError(`Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`, varDefNode.type));
      continue;
    }
    if (!hasOwnProperty(inputs, varName)) {
      if (varDefNode.defaultValue) {
        coercedValues[varName] = valueFromAST2(varDefNode.defaultValue, varType);
      } else if (isNonNullType(varType)) {
        const varTypeStr = inspect(varType);
        onError(new GraphQLError(`Variable "$${varName}" of required type "${varTypeStr}" was not provided.`, varDefNode));
      }
      continue;
    }
    const value = inputs[varName];
    if (value === null && isNonNullType(varType)) {
      const varTypeStr = inspect(varType);
      onError(new GraphQLError(`Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`, varDefNode));
      continue;
    }
    coercedValues[varName] = coerceInputValue(value, varType, (path, invalidValue, error) => {
      let prefix = `Variable "$${varName}" got invalid value ` + inspect(invalidValue);
      if (path.length > 0) {
        prefix += ` at "${varName}${printPathArray(path)}"`;
      }
      onError(new GraphQLError(prefix + "; " + error.message, varDefNode, void 0, void 0, void 0, error.originalError));
    });
  }
  return coercedValues;
}
function getArgumentValues(def, node, variableValues) {
  var _node$arguments;
  const coercedValues = {};
  const argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
  const argNodeMap = keyMap(argumentNodes, (arg) => arg.name.value);
  for (const argDef of def.args) {
    const name = argDef.name;
    const argType = argDef.type;
    const argumentNode = argNodeMap[name];
    if (!argumentNode) {
      if (argDef.defaultValue !== void 0) {
        coercedValues[name] = argDef.defaultValue;
      } else if (isNonNullType(argType)) {
        throw new GraphQLError(`Argument "${name}" of required type "${inspect(argType)}" was not provided.`, node);
      }
      continue;
    }
    const valueNode = argumentNode.value;
    let isNull = valueNode.kind === Kind.NULL;
    if (valueNode.kind === Kind.VARIABLE) {
      const variableName = valueNode.name.value;
      if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
        if (argDef.defaultValue !== void 0) {
          coercedValues[name] = argDef.defaultValue;
        } else if (isNonNullType(argType)) {
          throw new GraphQLError(`Argument "${name}" of required type "${inspect(argType)}" was provided the variable "$${variableName}" which was not provided a runtime value.`, valueNode);
        }
        continue;
      }
      isNull = variableValues[variableName] == null;
    }
    if (isNull && isNonNullType(argType)) {
      throw new GraphQLError(`Argument "${name}" of non-null type "${inspect(argType)}" must not be null.`, valueNode);
    }
    const coercedValue = valueFromAST2(valueNode, argType, variableValues);
    if (coercedValue === void 0) {
      throw new GraphQLError(`Argument "${name}" has invalid value ${print(valueNode)}.`, valueNode);
    }
    coercedValues[name] = coercedValue;
  }
  return coercedValues;
}
function getDirectiveValues(directiveDef, node, variableValues) {
  var _node$directives;
  const directiveNode = (_node$directives = node.directives) === null || _node$directives === void 0 ? void 0 : _node$directives.find((directive) => directive.name.value === directiveDef.name);
  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
export {getArgumentValues, getDirectiveValues, getVariableValues};
export default null;
