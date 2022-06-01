import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {i as invariant} from "../../common/location-1f330233.js";
import {isPrintableAsBlockString} from "../language/blockString.js";
import {Kind} from "../language/kinds.js";
import {print} from "../language/printer.js";
import {j as isScalarType, k as isObjectType, l as isInterfaceType, m as isUnionType, n as isEnumType, o as isInputObjectType} from "../../common/definition-c28e27a3.js";
import {DEFAULT_DEPRECATION_REASON, isSpecifiedDirective} from "../type/directives.js";
import {isIntrospectionType} from "../type/introspection.js";
import {isSpecifiedScalarType} from "../type/scalars.js";
import {astFromValue as astFromValue2} from "./astFromValue.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../../common/devAssert-57a6c5bb.js";
import "../language/ast.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/GraphQLError-be1f809e.js";
import "../language/printLocation.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../type/assertName.js";
import "../language/directiveLocation.js";
import "../../common/isIterableObject-93462344.js";
function printSchema(schema) {
  return printFilteredSchema(schema, (n) => !isSpecifiedDirective(n), isDefinedType);
}
function printIntrospectionSchema(schema) {
  return printFilteredSchema(schema, isSpecifiedDirective, isIntrospectionType);
}
function isDefinedType(type) {
  return !isSpecifiedScalarType(type) && !isIntrospectionType(type);
}
function printFilteredSchema(schema, directiveFilter, typeFilter) {
  const directives2 = schema.getDirectives().filter(directiveFilter);
  const types = Object.values(schema.getTypeMap()).filter(typeFilter);
  return [
    printSchemaDefinition(schema),
    ...directives2.map((directive) => printDirective(directive)),
    ...types.map((type) => printType(type))
  ].filter(Boolean).join("\n\n");
}
function printSchemaDefinition(schema) {
  if (schema.description == null && isSchemaOfCommonNames(schema)) {
    return;
  }
  const operationTypes = [];
  const queryType = schema.getQueryType();
  if (queryType) {
    operationTypes.push(`  query: ${queryType.name}`);
  }
  const mutationType = schema.getMutationType();
  if (mutationType) {
    operationTypes.push(`  mutation: ${mutationType.name}`);
  }
  const subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    operationTypes.push(`  subscription: ${subscriptionType.name}`);
  }
  return printDescription(schema) + `schema {
${operationTypes.join("\n")}
}`;
}
function isSchemaOfCommonNames(schema) {
  const queryType = schema.getQueryType();
  if (queryType && queryType.name !== "Query") {
    return false;
  }
  const mutationType = schema.getMutationType();
  if (mutationType && mutationType.name !== "Mutation") {
    return false;
  }
  const subscriptionType = schema.getSubscriptionType();
  if (subscriptionType && subscriptionType.name !== "Subscription") {
    return false;
  }
  return true;
}
function printType(type) {
  if (isScalarType(type)) {
    return printScalar(type);
  }
  if (isObjectType(type)) {
    return printObject(type);
  }
  if (isInterfaceType(type)) {
    return printInterface(type);
  }
  if (isUnionType(type)) {
    return printUnion(type);
  }
  if (isEnumType(type)) {
    return printEnum(type);
  }
  if (isInputObjectType(type)) {
    return printInputObject(type);
  }
  invariant(false, "Unexpected type: " + inspect(type));
}
function printScalar(type) {
  return printDescription(type) + `scalar ${type.name}` + printSpecifiedByURL(type);
}
function printImplementedInterfaces(type) {
  const interfaces = type.getInterfaces();
  return interfaces.length ? " implements " + interfaces.map((i) => i.name).join(" & ") : "";
}
function printObject(type) {
  return printDescription(type) + `type ${type.name}` + printImplementedInterfaces(type) + printFields(type);
}
function printInterface(type) {
  return printDescription(type) + `interface ${type.name}` + printImplementedInterfaces(type) + printFields(type);
}
function printUnion(type) {
  const types = type.getTypes();
  const possibleTypes = types.length ? " = " + types.join(" | ") : "";
  return printDescription(type) + "union " + type.name + possibleTypes;
}
function printEnum(type) {
  const values = type.getValues().map((value, i) => printDescription(value, "  ", !i) + "  " + value.name + printDeprecated(value.deprecationReason));
  return printDescription(type) + `enum ${type.name}` + printBlock(values);
}
function printInputObject(type) {
  const fields = Object.values(type.getFields()).map((f, i) => printDescription(f, "  ", !i) + "  " + printInputValue(f));
  return printDescription(type) + `input ${type.name}` + printBlock(fields);
}
function printFields(type) {
  const fields = Object.values(type.getFields()).map((f, i) => printDescription(f, "  ", !i) + "  " + f.name + printArgs(f.args, "  ") + ": " + String(f.type) + printDeprecated(f.deprecationReason));
  return printBlock(fields);
}
function printBlock(items) {
  return items.length !== 0 ? " {\n" + items.join("\n") + "\n}" : "";
}
function printArgs(args, indentation = "") {
  if (args.length === 0) {
    return "";
  }
  if (args.every((arg) => !arg.description)) {
    return "(" + args.map(printInputValue).join(", ") + ")";
  }
  return "(\n" + args.map((arg, i) => printDescription(arg, "  " + indentation, !i) + "  " + indentation + printInputValue(arg)).join("\n") + "\n" + indentation + ")";
}
function printInputValue(arg) {
  const defaultAST = astFromValue2(arg.defaultValue, arg.type);
  let argDecl = arg.name + ": " + String(arg.type);
  if (defaultAST) {
    argDecl += ` = ${print(defaultAST)}`;
  }
  return argDecl + printDeprecated(arg.deprecationReason);
}
function printDirective(directive) {
  return printDescription(directive) + "directive @" + directive.name + printArgs(directive.args) + (directive.isRepeatable ? " repeatable" : "") + " on " + directive.locations.join(" | ");
}
function printDeprecated(reason) {
  if (reason == null) {
    return "";
  }
  if (reason !== DEFAULT_DEPRECATION_REASON) {
    const astValue = print({
      kind: Kind.STRING,
      value: reason
    });
    return ` @deprecated(reason: ${astValue})`;
  }
  return " @deprecated";
}
function printSpecifiedByURL(scalar) {
  if (scalar.specifiedByURL == null) {
    return "";
  }
  const astValue = print({
    kind: Kind.STRING,
    value: scalar.specifiedByURL
  });
  return ` @specifiedBy(url: ${astValue})`;
}
function printDescription(def, indentation = "", firstInBlock = true) {
  const {description} = def;
  if (description == null) {
    return "";
  }
  const blockString2 = print({
    kind: Kind.STRING,
    value: description,
    block: isPrintableAsBlockString(description)
  });
  const prefix = indentation && !firstInBlock ? "\n" + indentation : indentation;
  return prefix + blockString2.replace(/\n/g, "\n" + indentation) + "\n";
}
export {printIntrospectionSchema, printSchema, printType};
export default null;
