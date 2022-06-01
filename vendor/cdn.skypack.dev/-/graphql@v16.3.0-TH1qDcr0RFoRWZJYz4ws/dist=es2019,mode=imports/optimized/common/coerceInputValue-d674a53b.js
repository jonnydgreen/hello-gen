import {q as isNonNullType, p as isListType, o as isInputObjectType, Z as suggestionList, _ as didYouMean, u as isLeafType} from "./definition-c28e27a3.js";
import {i as inspect} from "./inspect-3f8aaeec.js";
import {i as invariant} from "./location-1f330233.js";
import {i as isIterableObject} from "./isIterableObject-93462344.js";
import {G as GraphQLError, i as isObjectLike} from "./GraphQLError-be1f809e.js";
function printPathArray(path) {
  return path.map((key) => typeof key === "number" ? "[" + key.toString() + "]" : "." + key).join("");
}
function addPath(prev, key, typename) {
  return {
    prev,
    key,
    typename
  };
}
function pathToArray(path) {
  const flattened = [];
  let curr = path;
  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }
  return flattened.reverse();
}
function coerceInputValue(inputValue, type, onError = defaultOnError) {
  return coerceInputValueImpl(inputValue, type, onError, void 0);
}
function defaultOnError(path, invalidValue, error) {
  let errorPrefix = "Invalid value " + inspect(invalidValue);
  if (path.length > 0) {
    errorPrefix += ` at "value${printPathArray(path)}"`;
  }
  error.message = errorPrefix + ": " + error.message;
  throw error;
}
function coerceInputValueImpl(inputValue, type, onError, path) {
  if (isNonNullType(type)) {
    if (inputValue != null) {
      return coerceInputValueImpl(inputValue, type.ofType, onError, path);
    }
    onError(pathToArray(path), inputValue, new GraphQLError(`Expected non-nullable type "${inspect(type)}" not to be null.`));
    return;
  }
  if (inputValue == null) {
    return null;
  }
  if (isListType(type)) {
    const itemType = type.ofType;
    if (isIterableObject(inputValue)) {
      return Array.from(inputValue, (itemValue, index) => {
        const itemPath = addPath(path, index, void 0);
        return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
      });
    }
    return [coerceInputValueImpl(inputValue, itemType, onError, path)];
  }
  if (isInputObjectType(type)) {
    if (!isObjectLike(inputValue)) {
      onError(pathToArray(path), inputValue, new GraphQLError(`Expected type "${type.name}" to be an object.`));
      return;
    }
    const coercedValue = {};
    const fieldDefs = type.getFields();
    for (const field of Object.values(fieldDefs)) {
      const fieldValue = inputValue[field.name];
      if (fieldValue === void 0) {
        if (field.defaultValue !== void 0) {
          coercedValue[field.name] = field.defaultValue;
        } else if (isNonNullType(field.type)) {
          const typeStr = inspect(field.type);
          onError(pathToArray(path), inputValue, new GraphQLError(`Field "${field.name}" of required type "${typeStr}" was not provided.`));
        }
        continue;
      }
      coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, addPath(path, field.name, type.name));
    }
    for (const fieldName of Object.keys(inputValue)) {
      if (!fieldDefs[fieldName]) {
        const suggestions = suggestionList(fieldName, Object.keys(type.getFields()));
        onError(pathToArray(path), inputValue, new GraphQLError(`Field "${fieldName}" is not defined by type "${type.name}".` + didYouMean(suggestions)));
      }
    }
    return coercedValue;
  }
  if (isLeafType(type)) {
    let parseResult;
    try {
      parseResult = type.parseValue(inputValue);
    } catch (error) {
      if (error instanceof GraphQLError) {
        onError(pathToArray(path), inputValue, error);
      } else {
        onError(pathToArray(path), inputValue, new GraphQLError(`Expected type "${type.name}". ` + error.message, void 0, void 0, void 0, void 0, error));
      }
      return;
    }
    if (parseResult === void 0) {
      onError(pathToArray(path), inputValue, new GraphQLError(`Expected type "${type.name}".`));
    }
    return parseResult;
  }
  invariant(false, "Unexpected input type: " + inspect(type));
}
export {addPath as a, printPathArray as b, coerceInputValue as c, pathToArray as p};
export default null;
