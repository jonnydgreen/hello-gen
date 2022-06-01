import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
function toError(thrownValue) {
  return thrownValue instanceof Error ? thrownValue : new NonErrorThrown(thrownValue);
}
class NonErrorThrown extends Error {
  constructor(thrownValue) {
    super("Unexpected error value: " + inspect(thrownValue));
    this.name = "NonErrorThrown";
    this.thrownValue = thrownValue;
  }
}
function locatedError(rawOriginalError, nodes, path) {
  var _nodes;
  const originalError = toError(rawOriginalError);
  if (isLocatedGraphQLError(originalError)) {
    return originalError;
  }
  return new GraphQLError(originalError.message, (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes, originalError.source, originalError.positions, path, originalError);
}
function isLocatedGraphQLError(error) {
  return Array.isArray(error.path);
}
export {locatedError};
export default null;
