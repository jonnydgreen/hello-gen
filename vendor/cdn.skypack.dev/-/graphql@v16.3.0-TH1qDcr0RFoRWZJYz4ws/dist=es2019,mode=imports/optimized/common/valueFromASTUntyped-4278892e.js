import {Kind} from "../graphql/language/kinds.js";
function keyValMap(list, keyFn, valFn) {
  const result = Object.create(null);
  for (const item of list) {
    result[keyFn(item)] = valFn(item);
  }
  return result;
}
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case Kind.NULL:
      return null;
    case Kind.INT:
      return parseInt(valueNode.value, 10);
    case Kind.FLOAT:
      return parseFloat(valueNode.value);
    case Kind.STRING:
    case Kind.ENUM:
    case Kind.BOOLEAN:
      return valueNode.value;
    case Kind.LIST:
      return valueNode.values.map((node) => valueFromASTUntyped(node, variables));
    case Kind.OBJECT:
      return keyValMap(valueNode.fields, (field) => field.name.value, (field) => valueFromASTUntyped(field.value, variables));
    case Kind.VARIABLE:
      return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
  }
}
export {keyValMap as k, valueFromASTUntyped as v};
export default null;
