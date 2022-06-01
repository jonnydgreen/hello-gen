import {Kind} from "../language/kinds.js";
import {h as GraphQLNonNull, g as GraphQLList} from "../../common/definition-c28e27a3.js";
import "../../common/devAssert-57a6c5bb.js";
import "../../common/inspect-3f8aaeec.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/GraphQLError-be1f809e.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../language/ast.js";
import "../type/assertName.js";
function typeFromAST(schema, typeNode) {
  switch (typeNode.kind) {
    case Kind.LIST_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new GraphQLList(innerType);
    }
    case Kind.NON_NULL_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new GraphQLNonNull(innerType);
    }
    case Kind.NAMED_TYPE:
      return schema.getType(typeNode.name.value);
  }
}
export {typeFromAST};
export default null;
