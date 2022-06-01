import {Kind} from "../language/kinds.js";
function getOperationAST(documentAST, operationName) {
  let operation = null;
  for (const definition of documentAST.definitions) {
    if (definition.kind === Kind.OPERATION_DEFINITION) {
      var _definition$name;
      if (operationName == null) {
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
        return definition;
      }
    }
  }
  return operation;
}
export {getOperationAST};
export default null;
