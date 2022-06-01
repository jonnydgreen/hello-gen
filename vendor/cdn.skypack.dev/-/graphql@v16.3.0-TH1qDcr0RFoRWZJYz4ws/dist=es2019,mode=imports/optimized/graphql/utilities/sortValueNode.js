import {n as naturalCompare} from "../../common/naturalCompare-f2043bd2.js";
import {Kind} from "../language/kinds.js";
function sortValueNode(valueNode) {
  switch (valueNode.kind) {
    case Kind.OBJECT:
      return {...valueNode, fields: sortFields(valueNode.fields)};
    case Kind.LIST:
      return {...valueNode, values: valueNode.values.map(sortValueNode)};
    case Kind.INT:
    case Kind.FLOAT:
    case Kind.STRING:
    case Kind.BOOLEAN:
    case Kind.NULL:
    case Kind.ENUM:
    case Kind.VARIABLE:
      return valueNode;
  }
}
function sortFields(fields) {
  return fields.map((fieldNode) => ({
    ...fieldNode,
    value: sortValueNode(fieldNode.value)
  })).sort((fieldA, fieldB) => naturalCompare(fieldA.name.value, fieldB.name.value));
}
export {sortValueNode};
export default null;
