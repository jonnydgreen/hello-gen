import {d as devAssert} from "../../common/devAssert-57a6c5bb.js";
import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import {assertName as assertName2} from "../type/assertName.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../language/characterClasses.js";
function assertValidName(name) {
  const error = isValidNameError(name);
  if (error) {
    throw error;
  }
  return name;
}
function isValidNameError(name) {
  typeof name === "string" || devAssert(false, "Expected name to be a string.");
  if (name.startsWith("__")) {
    return new GraphQLError(`Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`);
  }
  try {
    assertName2(name);
  } catch (error) {
    return error;
  }
}
export {assertValidName, isValidNameError};
export default null;
