import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
function getOperationRootType(schema, operation) {
  if (operation.operation === "query") {
    const queryType = schema.getQueryType();
    if (!queryType) {
      throw new GraphQLError("Schema does not define the required query root type.", operation);
    }
    return queryType;
  }
  if (operation.operation === "mutation") {
    const mutationType = schema.getMutationType();
    if (!mutationType) {
      throw new GraphQLError("Schema is not configured for mutations.", operation);
    }
    return mutationType;
  }
  if (operation.operation === "subscription") {
    const subscriptionType = schema.getSubscriptionType();
    if (!subscriptionType) {
      throw new GraphQLError("Schema is not configured for subscriptions.", operation);
    }
    return subscriptionType;
  }
  throw new GraphQLError("Can only have query, mutation and subscription operations.", operation);
}
export {getOperationRootType};
export default null;
