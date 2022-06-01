import {d as devAssert} from "../../common/devAssert-57a6c5bb.js";
import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {a as addPath, p as pathToArray} from "../../common/coerceInputValue-d674a53b.js";
import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import {locatedError as locatedError2} from "../error/locatedError.js";
import {collectFields as collectFields2} from "./collectFields.js";
import {c as assertValidExecutionArguments, f as buildExecutionContext, g as getFieldDef, h as buildResolveInfo, e as execute} from "../../common/execute-2127bc1b.js";
import {mapAsyncIterator as mapAsyncIterator2} from "./mapAsyncIterator.js";
import {getArgumentValues} from "./values.js";
import "../../common/definition-c28e27a3.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../language/kinds.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../language/ast.js";
import "../type/assertName.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../../common/isIterableObject-93462344.js";
import "../type/directives.js";
import "../language/directiveLocation.js";
import "../type/scalars.js";
import "../utilities/typeFromAST.js";
import "../type/introspection.js";
import "../utilities/astFromValue.js";
import "../type/validate.js";
import "../utilities/typeComparators.js";
import "../type/schema.js";
import "../utilities/valueFromAST.js";
function isAsyncIterable(maybeAsyncIterable) {
  return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[Symbol.asyncIterator]) === "function";
}
async function subscribe(args) {
  arguments.length < 2 || devAssert(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
  const {
    schema: schema2,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    subscribeFieldResolver
  } = args;
  const resultOrStream = await createSourceEventStream(schema2, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);
  if (!isAsyncIterable(resultOrStream)) {
    return resultOrStream;
  }
  const mapSourceToResponse = (payload) => execute({
    schema: schema2,
    document,
    rootValue: payload,
    contextValue,
    variableValues,
    operationName,
    fieldResolver
  });
  return mapAsyncIterator2(resultOrStream, mapSourceToResponse);
}
async function createSourceEventStream(schema2, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver) {
  assertValidExecutionArguments(schema2, document, variableValues);
  const exeContext = buildExecutionContext({
    schema: schema2,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    subscribeFieldResolver
  });
  if (!("schema" in exeContext)) {
    return {
      errors: exeContext
    };
  }
  try {
    const eventStream = await executeSubscription(exeContext);
    if (!isAsyncIterable(eventStream)) {
      throw new Error(`Subscription field must return Async Iterable. Received: ${inspect(eventStream)}.`);
    }
    return eventStream;
  } catch (error) {
    if (error instanceof GraphQLError) {
      return {
        errors: [error]
      };
    }
    throw error;
  }
}
async function executeSubscription(exeContext) {
  const {schema: schema2, fragments, operation, variableValues, rootValue} = exeContext;
  const rootType = schema2.getSubscriptionType();
  if (rootType == null) {
    throw new GraphQLError("Schema is not configured to execute subscription operation.", operation);
  }
  const rootFields = collectFields2(schema2, fragments, variableValues, rootType, operation.selectionSet);
  const [responseName, fieldNodes] = [...rootFields.entries()][0];
  const fieldDef = getFieldDef(schema2, rootType, fieldNodes[0]);
  if (!fieldDef) {
    const fieldName = fieldNodes[0].name.value;
    throw new GraphQLError(`The subscription field "${fieldName}" is not defined.`, fieldNodes);
  }
  const path = addPath(void 0, responseName, rootType.name);
  const info = buildResolveInfo(exeContext, fieldDef, fieldNodes, rootType, path);
  try {
    var _fieldDef$subscribe;
    const args = getArgumentValues(fieldDef, fieldNodes[0], variableValues);
    const contextValue = exeContext.contextValue;
    const resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.subscribeFieldResolver;
    const eventStream = await resolveFn(rootValue, args, contextValue, info);
    if (eventStream instanceof Error) {
      throw eventStream;
    }
    return eventStream;
  } catch (error) {
    throw locatedError2(error, fieldNodes, pathToArray(path));
  }
}
export {createSourceEventStream, subscribe};
export default null;
