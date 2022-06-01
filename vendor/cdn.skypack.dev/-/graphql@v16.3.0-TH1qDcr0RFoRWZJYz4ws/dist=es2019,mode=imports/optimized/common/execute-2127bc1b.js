import {d as devAssert} from "./devAssert-57a6c5bb.js";
import {i as inspect} from "./inspect-3f8aaeec.js";
import {i as invariant} from "./location-1f330233.js";
import {i as isIterableObject} from "./isIterableObject-93462344.js";
import {i as isObjectLike, G as GraphQLError} from "./GraphQLError-be1f809e.js";
import {a as addPath, p as pathToArray} from "./coerceInputValue-d674a53b.js";
import {locatedError as locatedError2} from "../graphql/error/locatedError.js";
import {OperationTypeNode} from "../graphql/language/ast.js";
import {Kind} from "../graphql/language/kinds.js";
import {q as isNonNullType, p as isListType, u as isLeafType, w as isAbstractType, k as isObjectType} from "./definition-c28e27a3.js";
import {SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef} from "../graphql/type/introspection.js";
import {assertValidSchema} from "../graphql/type/validate.js";
import {collectFields as collectFields2, collectSubfields as collectSubfields$1} from "../graphql/execution/collectFields.js";
import {getVariableValues, getArgumentValues} from "../graphql/execution/values.js";
function isPromise(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
}
function memoize3(fn) {
  let cache0;
  return function memoized(a1, a2, a3) {
    if (cache0 === void 0) {
      cache0 = new WeakMap();
    }
    let cache1 = cache0.get(a1);
    if (cache1 === void 0) {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }
    let cache2 = cache1.get(a2);
    if (cache2 === void 0) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }
    let fnResult = cache2.get(a3);
    if (fnResult === void 0) {
      fnResult = fn(a1, a2, a3);
      cache2.set(a3, fnResult);
    }
    return fnResult;
  };
}
function promiseForObject(object) {
  return Promise.all(Object.values(object)).then((resolvedValues) => {
    const resolvedObject = Object.create(null);
    for (const [i, key] of Object.keys(object).entries()) {
      resolvedObject[key] = resolvedValues[i];
    }
    return resolvedObject;
  });
}
function promiseReduce(values2, callbackFn, initialValue) {
  let accumulator = initialValue;
  for (const value of values2) {
    accumulator = isPromise(accumulator) ? accumulator.then((resolved) => callbackFn(resolved, value)) : callbackFn(accumulator, value);
  }
  return accumulator;
}
const collectSubfields = memoize3((exeContext, returnType, fieldNodes) => collectSubfields$1(exeContext.schema, exeContext.fragments, exeContext.variableValues, returnType, fieldNodes));
function execute(args) {
  arguments.length < 2 || devAssert(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
  const {schema, document, variableValues, rootValue} = args;
  assertValidExecutionArguments(schema, document, variableValues);
  const exeContext = buildExecutionContext(args);
  if (!("schema" in exeContext)) {
    return {
      errors: exeContext
    };
  }
  try {
    const {operation} = exeContext;
    const result = executeOperation(exeContext, operation, rootValue);
    if (isPromise(result)) {
      return result.then((data) => buildResponse(data, exeContext.errors), (error) => {
        exeContext.errors.push(error);
        return buildResponse(null, exeContext.errors);
      });
    }
    return buildResponse(result, exeContext.errors);
  } catch (error) {
    exeContext.errors.push(error);
    return buildResponse(null, exeContext.errors);
  }
}
function executeSync(args) {
  const result = execute(args);
  if (isPromise(result)) {
    throw new Error("GraphQL execution failed to complete synchronously.");
  }
  return result;
}
function buildResponse(data, errors) {
  return errors.length === 0 ? {
    data
  } : {
    errors,
    data
  };
}
function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || devAssert(false, "Must provide document.");
  assertValidSchema(schema);
  rawVariableValues == null || isObjectLike(rawVariableValues) || devAssert(false, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
}
function buildExecutionContext(args) {
  var _definition$name, _operation$variableDe;
  const {
    schema,
    document,
    rootValue,
    contextValue,
    variableValues: rawVariableValues,
    operationName,
    fieldResolver,
    typeResolver,
    subscribeFieldResolver
  } = args;
  let operation;
  const fragments = Object.create(null);
  for (const definition of document.definitions) {
    switch (definition.kind) {
      case Kind.OPERATION_DEFINITION:
        if (operationName == null) {
          if (operation !== void 0) {
            return [
              new GraphQLError("Must provide operation name if query contains multiple operations.")
            ];
          }
          operation = definition;
        } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
          operation = definition;
        }
        break;
      case Kind.FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }
  if (!operation) {
    if (operationName != null) {
      return [new GraphQLError(`Unknown operation named "${operationName}".`)];
    }
    return [new GraphQLError("Must provide an operation.")];
  }
  const variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
  const coercedVariableValues = getVariableValues(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
    maxErrors: 50
  });
  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }
  return {
    schema,
    fragments,
    rootValue,
    contextValue,
    operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
    typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
    subscribeFieldResolver: subscribeFieldResolver !== null && subscribeFieldResolver !== void 0 ? subscribeFieldResolver : defaultFieldResolver,
    errors: []
  };
}
function executeOperation(exeContext, operation, rootValue) {
  const rootType = exeContext.schema.getRootType(operation.operation);
  if (rootType == null) {
    throw new GraphQLError(`Schema is not configured to execute ${operation.operation} operation.`, operation);
  }
  const rootFields = collectFields2(exeContext.schema, exeContext.fragments, exeContext.variableValues, rootType, operation.selectionSet);
  const path = void 0;
  switch (operation.operation) {
    case OperationTypeNode.QUERY:
      return executeFields(exeContext, rootType, rootValue, path, rootFields);
    case OperationTypeNode.MUTATION:
      return executeFieldsSerially(exeContext, rootType, rootValue, path, rootFields);
    case OperationTypeNode.SUBSCRIPTION:
      return executeFields(exeContext, rootType, rootValue, path, rootFields);
  }
}
function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return promiseReduce(fields.entries(), (results, [responseName, fieldNodes]) => {
    const fieldPath = addPath(path, responseName, parentType.name);
    const result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === void 0) {
      return results;
    }
    if (isPromise(result)) {
      return result.then((resolvedResult) => {
        results[responseName] = resolvedResult;
        return results;
      });
    }
    results[responseName] = result;
    return results;
  }, Object.create(null));
}
function executeFields(exeContext, parentType, sourceValue, path, fields) {
  const results = Object.create(null);
  let containsPromise = false;
  for (const [responseName, fieldNodes] of fields.entries()) {
    const fieldPath = addPath(path, responseName, parentType.name);
    const result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result !== void 0) {
      results[responseName] = result;
      if (isPromise(result)) {
        containsPromise = true;
      }
    }
  }
  if (!containsPromise) {
    return results;
  }
  return promiseForObject(results);
}
function executeField(exeContext, parentType, source, fieldNodes, path) {
  var _fieldDef$resolve;
  const fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);
  if (!fieldDef) {
    return;
  }
  const returnType = fieldDef.type;
  const resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
  const info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);
  try {
    const args = getArgumentValues(fieldDef, fieldNodes[0], exeContext.variableValues);
    const contextValue = exeContext.contextValue;
    const result = resolveFn(source, args, contextValue, info);
    let completed;
    if (isPromise(result)) {
      completed = result.then((resolved) => completeValue(exeContext, returnType, fieldNodes, info, path, resolved));
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }
    if (isPromise(completed)) {
      return completed.then(void 0, (rawError) => {
        const error = locatedError2(rawError, fieldNodes, pathToArray(path));
        return handleFieldError(error, returnType, exeContext);
      });
    }
    return completed;
  } catch (rawError) {
    const error = locatedError2(rawError, fieldNodes, pathToArray(path));
    return handleFieldError(error, returnType, exeContext);
  }
}
function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  return {
    fieldName: fieldDef.name,
    fieldNodes,
    returnType: fieldDef.type,
    parentType,
    path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}
function handleFieldError(error, returnType, exeContext) {
  if (isNonNullType(returnType)) {
    throw error;
  }
  exeContext.errors.push(error);
  return null;
}
function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (result instanceof Error) {
    throw result;
  }
  if (isNonNullType(returnType)) {
    const completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
    if (completed === null) {
      throw new Error(`Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`);
    }
    return completed;
  }
  if (result == null) {
    return null;
  }
  if (isListType(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  }
  if (isLeafType(returnType)) {
    return completeLeafValue(returnType, result);
  }
  if (isAbstractType(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  }
  if (isObjectType(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  }
  invariant(false, "Cannot complete value of unexpected output type: " + inspect(returnType));
}
function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (!isIterableObject(result)) {
    throw new GraphQLError(`Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`);
  }
  const itemType = returnType.ofType;
  let containsPromise = false;
  const completedResults = Array.from(result, (item, index) => {
    const itemPath = addPath(path, index, void 0);
    try {
      let completedItem;
      if (isPromise(item)) {
        completedItem = item.then((resolved) => completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved));
      } else {
        completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item);
      }
      if (isPromise(completedItem)) {
        containsPromise = true;
        return completedItem.then(void 0, (rawError) => {
          const error = locatedError2(rawError, fieldNodes, pathToArray(itemPath));
          return handleFieldError(error, itemType, exeContext);
        });
      }
      return completedItem;
    } catch (rawError) {
      const error = locatedError2(rawError, fieldNodes, pathToArray(itemPath));
      return handleFieldError(error, itemType, exeContext);
    }
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
function completeLeafValue(returnType, result) {
  const serializedResult = returnType.serialize(result);
  if (serializedResult == null) {
    throw new Error(`Expected \`${inspect(returnType)}.serialize(${inspect(result)})\` to return non-nullable value, returned: ${inspect(serializedResult)}`);
  }
  return serializedResult;
}
function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var _returnType$resolveTy;
  const resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
  const contextValue = exeContext.contextValue;
  const runtimeType = resolveTypeFn(result, contextValue, info, returnType);
  if (isPromise(runtimeType)) {
    return runtimeType.then((resolvedRuntimeType) => completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result));
  }
  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}
function ensureValidRuntimeType(runtimeTypeName, exeContext, returnType, fieldNodes, info, result) {
  if (runtimeTypeName == null) {
    throw new GraphQLError(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}". Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, fieldNodes);
  }
  if (isObjectType(runtimeTypeName)) {
    throw new GraphQLError("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
  }
  if (typeof runtimeTypeName !== "string") {
    throw new GraphQLError(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with value ${inspect(result)}, received "${inspect(runtimeTypeName)}".`);
  }
  const runtimeType = exeContext.schema.getType(runtimeTypeName);
  if (runtimeType == null) {
    throw new GraphQLError(`Abstract type "${returnType.name}" was resolved to a type "${runtimeTypeName}" that does not exist inside the schema.`, fieldNodes);
  }
  if (!isObjectType(runtimeType)) {
    throw new GraphQLError(`Abstract type "${returnType.name}" was resolved to a non-object type "${runtimeTypeName}".`, fieldNodes);
  }
  if (!exeContext.schema.isSubType(returnType, runtimeType)) {
    throw new GraphQLError(`Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`, fieldNodes);
  }
  return runtimeType;
}
function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  const subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  if (returnType.isTypeOf) {
    const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
    if (isPromise(isTypeOf)) {
      return isTypeOf.then((resolvedIsTypeOf) => {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
        return executeFields(exeContext, returnType, result, path, subFieldNodes);
      });
    }
    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new GraphQLError(`Expected value of type "${returnType.name}" but got: ${inspect(result)}.`, fieldNodes);
}
const defaultTypeResolver = function(value, contextValue, info, abstractType) {
  if (isObjectLike(value) && typeof value.__typename === "string") {
    return value.__typename;
  }
  const possibleTypes = info.schema.getPossibleTypes(abstractType);
  const promisedIsTypeOfResults = [];
  for (let i = 0; i < possibleTypes.length; i++) {
    const type = possibleTypes[i];
    if (type.isTypeOf) {
      const isTypeOfResult = type.isTypeOf(value, contextValue, info);
      if (isPromise(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type.name;
      }
    }
  }
  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults) => {
      for (let i = 0; i < isTypeOfResults.length; i++) {
        if (isTypeOfResults[i]) {
          return possibleTypes[i].name;
        }
      }
    });
  }
};
const defaultFieldResolver = function(source, args, contextValue, info) {
  if (isObjectLike(source) || typeof source === "function") {
    const property = source[info.fieldName];
    if (typeof property === "function") {
      return source[info.fieldName](args, contextValue, info);
    }
    return property;
  }
};
function getFieldDef(schema, parentType, fieldNode) {
  const fieldName = fieldNode.name.value;
  if (fieldName === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return SchemaMetaFieldDef;
  } else if (fieldName === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return TypeMetaFieldDef;
  } else if (fieldName === TypeNameMetaFieldDef.name) {
    return TypeNameMetaFieldDef;
  }
  return parentType.getFields()[fieldName];
}
export {executeSync as a, defaultTypeResolver as b, assertValidExecutionArguments as c, defaultFieldResolver as d, execute as e, buildExecutionContext as f, getFieldDef as g, buildResolveInfo as h, isPromise as i};
export default null;
