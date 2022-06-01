import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, void 0, source, [
    position
  ]);
}
export {syntaxError};
export default null;
