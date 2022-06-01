import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {G as GraphQLError} from "../../common/GraphQLError-be1f809e.js";
import {OperationTypeNode} from "../language/ast.js";
import {isTypeSubTypeOf, isEqualType} from "../utilities/typeComparators.js";
import {k as isObjectType, s as isInputType, A as isRequiredArgument, z as isNamedType, l as isInterfaceType, m as isUnionType, n as isEnumType, o as isInputObjectType, t as isOutputType, B as isRequiredInputField, q as isNonNullType} from "../../common/definition-c28e27a3.js";
import {isDirective, GraphQLDeprecatedDirective} from "./directives.js";
import {isIntrospectionType} from "./introspection.js";
import {assertSchema} from "./schema.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../../common/devAssert-57a6c5bb.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../language/kinds.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "./assertName.js";
import "../language/directiveLocation.js";
import "./scalars.js";
import "../utilities/astFromValue.js";
import "../../common/isIterableObject-93462344.js";
function validateSchema(schema2) {
  assertSchema(schema2);
  if (schema2.__validationErrors) {
    return schema2.__validationErrors;
  }
  const context = new SchemaValidationContext(schema2);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context);
  const errors = context.getErrors();
  schema2.__validationErrors = errors;
  return errors;
}
function assertValidSchema(schema2) {
  const errors = validateSchema(schema2);
  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join("\n\n"));
  }
}
class SchemaValidationContext {
  constructor(schema2) {
    this._errors = [];
    this.schema = schema2;
  }
  reportError(message, nodes) {
    const _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;
    this._errors.push(new GraphQLError(message, _nodes));
  }
  getErrors() {
    return this._errors;
  }
}
function validateRootTypes(context) {
  const schema2 = context.schema;
  const queryType = schema2.getQueryType();
  if (!queryType) {
    context.reportError("Query root type must be provided.", schema2.astNode);
  } else if (!isObjectType(queryType)) {
    var _getOperationTypeNode;
    context.reportError(`Query root type must be Object type, it cannot be ${inspect(queryType)}.`, (_getOperationTypeNode = getOperationTypeNode(schema2, OperationTypeNode.QUERY)) !== null && _getOperationTypeNode !== void 0 ? _getOperationTypeNode : queryType.astNode);
  }
  const mutationType = schema2.getMutationType();
  if (mutationType && !isObjectType(mutationType)) {
    var _getOperationTypeNode2;
    context.reportError(`Mutation root type must be Object type if provided, it cannot be ${inspect(mutationType)}.`, (_getOperationTypeNode2 = getOperationTypeNode(schema2, OperationTypeNode.MUTATION)) !== null && _getOperationTypeNode2 !== void 0 ? _getOperationTypeNode2 : mutationType.astNode);
  }
  const subscriptionType = schema2.getSubscriptionType();
  if (subscriptionType && !isObjectType(subscriptionType)) {
    var _getOperationTypeNode3;
    context.reportError(`Subscription root type must be Object type if provided, it cannot be ${inspect(subscriptionType)}.`, (_getOperationTypeNode3 = getOperationTypeNode(schema2, OperationTypeNode.SUBSCRIPTION)) !== null && _getOperationTypeNode3 !== void 0 ? _getOperationTypeNode3 : subscriptionType.astNode);
  }
}
function getOperationTypeNode(schema2, operation) {
  var _flatMap$find;
  return (_flatMap$find = [schema2.astNode, ...schema2.extensionASTNodes].flatMap((schemaNode) => {
    var _schemaNode$operation;
    return (_schemaNode$operation = schemaNode === null || schemaNode === void 0 ? void 0 : schemaNode.operationTypes) !== null && _schemaNode$operation !== void 0 ? _schemaNode$operation : [];
  }).find((operationNode) => operationNode.operation === operation)) === null || _flatMap$find === void 0 ? void 0 : _flatMap$find.type;
}
function validateDirectives(context) {
  for (const directive of context.schema.getDirectives()) {
    if (!isDirective(directive)) {
      context.reportError(`Expected directive but got: ${inspect(directive)}.`, directive === null || directive === void 0 ? void 0 : directive.astNode);
      continue;
    }
    validateName(context, directive);
    for (const arg of directive.args) {
      validateName(context, arg);
      if (!isInputType(arg.type)) {
        context.reportError(`The type of @${directive.name}(${arg.name}:) must be Input Type but got: ${inspect(arg.type)}.`, arg.astNode);
      }
      if (isRequiredArgument(arg) && arg.deprecationReason != null) {
        var _arg$astNode;
        context.reportError(`Required argument @${directive.name}(${arg.name}:) cannot be deprecated.`, [
          getDeprecatedDirectiveNode(arg.astNode),
          (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type
        ]);
      }
    }
  }
}
function validateName(context, node) {
  if (node.name.startsWith("__")) {
    context.reportError(`Name "${node.name}" must not begin with "__", which is reserved by GraphQL introspection.`, node.astNode);
  }
}
function validateTypes(context) {
  const validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
  const typeMap = context.schema.getTypeMap();
  for (const type of Object.values(typeMap)) {
    if (!isNamedType(type)) {
      context.reportError(`Expected GraphQL named type but got: ${inspect(type)}.`, type.astNode);
      continue;
    }
    if (!isIntrospectionType(type)) {
      validateName(context, type);
    }
    if (isObjectType(type)) {
      validateFields(context, type);
      validateInterfaces(context, type);
    } else if (isInterfaceType(type)) {
      validateFields(context, type);
      validateInterfaces(context, type);
    } else if (isUnionType(type)) {
      validateUnionMembers(context, type);
    } else if (isEnumType(type)) {
      validateEnumValues(context, type);
    } else if (isInputObjectType(type)) {
      validateInputFields(context, type);
      validateInputObjectCircularRefs(type);
    }
  }
}
function validateFields(context, type) {
  const fields = Object.values(type.getFields());
  if (fields.length === 0) {
    context.reportError(`Type ${type.name} must define one or more fields.`, [
      type.astNode,
      ...type.extensionASTNodes
    ]);
  }
  for (const field of fields) {
    validateName(context, field);
    if (!isOutputType(field.type)) {
      var _field$astNode;
      context.reportError(`The type of ${type.name}.${field.name} must be Output Type but got: ${inspect(field.type)}.`, (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type);
    }
    for (const arg of field.args) {
      const argName = arg.name;
      validateName(context, arg);
      if (!isInputType(arg.type)) {
        var _arg$astNode2;
        context.reportError(`The type of ${type.name}.${field.name}(${argName}:) must be Input Type but got: ${inspect(arg.type)}.`, (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0 ? void 0 : _arg$astNode2.type);
      }
      if (isRequiredArgument(arg) && arg.deprecationReason != null) {
        var _arg$astNode3;
        context.reportError(`Required argument ${type.name}.${field.name}(${argName}:) cannot be deprecated.`, [
          getDeprecatedDirectiveNode(arg.astNode),
          (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0 ? void 0 : _arg$astNode3.type
        ]);
      }
    }
  }
}
function validateInterfaces(context, type) {
  const ifaceTypeNames = Object.create(null);
  for (const iface of type.getInterfaces()) {
    if (!isInterfaceType(iface)) {
      context.reportError(`Type ${inspect(type)} must only implement Interface types, it cannot implement ${inspect(iface)}.`, getAllImplementsInterfaceNodes(type, iface));
      continue;
    }
    if (type === iface) {
      context.reportError(`Type ${type.name} cannot implement itself because it would create a circular reference.`, getAllImplementsInterfaceNodes(type, iface));
      continue;
    }
    if (ifaceTypeNames[iface.name]) {
      context.reportError(`Type ${type.name} can only implement ${iface.name} once.`, getAllImplementsInterfaceNodes(type, iface));
      continue;
    }
    ifaceTypeNames[iface.name] = true;
    validateTypeImplementsAncestors(context, type, iface);
    validateTypeImplementsInterface(context, type, iface);
  }
}
function validateTypeImplementsInterface(context, type, iface) {
  const typeFieldMap = type.getFields();
  for (const ifaceField of Object.values(iface.getFields())) {
    const fieldName = ifaceField.name;
    const typeField = typeFieldMap[fieldName];
    if (!typeField) {
      context.reportError(`Interface field ${iface.name}.${fieldName} expected but ${type.name} does not provide it.`, [ifaceField.astNode, type.astNode, ...type.extensionASTNodes]);
      continue;
    }
    if (!isTypeSubTypeOf(context.schema, typeField.type, ifaceField.type)) {
      var _ifaceField$astNode, _typeField$astNode;
      context.reportError(`Interface field ${iface.name}.${fieldName} expects type ${inspect(ifaceField.type)} but ${type.name}.${fieldName} is type ${inspect(typeField.type)}.`, [
        (_ifaceField$astNode = ifaceField.astNode) === null || _ifaceField$astNode === void 0 ? void 0 : _ifaceField$astNode.type,
        (_typeField$astNode = typeField.astNode) === null || _typeField$astNode === void 0 ? void 0 : _typeField$astNode.type
      ]);
    }
    for (const ifaceArg of ifaceField.args) {
      const argName = ifaceArg.name;
      const typeArg = typeField.args.find((arg) => arg.name === argName);
      if (!typeArg) {
        context.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) expected but ${type.name}.${fieldName} does not provide it.`, [ifaceArg.astNode, typeField.astNode]);
        continue;
      }
      if (!isEqualType(ifaceArg.type, typeArg.type)) {
        var _ifaceArg$astNode, _typeArg$astNode;
        context.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) expects type ${inspect(ifaceArg.type)} but ${type.name}.${fieldName}(${argName}:) is type ${inspect(typeArg.type)}.`, [
          (_ifaceArg$astNode = ifaceArg.astNode) === null || _ifaceArg$astNode === void 0 ? void 0 : _ifaceArg$astNode.type,
          (_typeArg$astNode = typeArg.astNode) === null || _typeArg$astNode === void 0 ? void 0 : _typeArg$astNode.type
        ]);
      }
    }
    for (const typeArg of typeField.args) {
      const argName = typeArg.name;
      const ifaceArg = ifaceField.args.find((arg) => arg.name === argName);
      if (!ifaceArg && isRequiredArgument(typeArg)) {
        context.reportError(`Object field ${type.name}.${fieldName} includes required argument ${argName} that is missing from the Interface field ${iface.name}.${fieldName}.`, [typeArg.astNode, ifaceField.astNode]);
      }
    }
  }
}
function validateTypeImplementsAncestors(context, type, iface) {
  const ifaceInterfaces = type.getInterfaces();
  for (const transitive of iface.getInterfaces()) {
    if (!ifaceInterfaces.includes(transitive)) {
      context.reportError(transitive === type ? `Type ${type.name} cannot implement ${iface.name} because it would create a circular reference.` : `Type ${type.name} must implement ${transitive.name} because it is implemented by ${iface.name}.`, [
        ...getAllImplementsInterfaceNodes(iface, transitive),
        ...getAllImplementsInterfaceNodes(type, iface)
      ]);
    }
  }
}
function validateUnionMembers(context, union) {
  const memberTypes = union.getTypes();
  if (memberTypes.length === 0) {
    context.reportError(`Union type ${union.name} must define one or more member types.`, [union.astNode, ...union.extensionASTNodes]);
  }
  const includedTypeNames = Object.create(null);
  for (const memberType of memberTypes) {
    if (includedTypeNames[memberType.name]) {
      context.reportError(`Union type ${union.name} can only include type ${memberType.name} once.`, getUnionMemberTypeNodes(union, memberType.name));
      continue;
    }
    includedTypeNames[memberType.name] = true;
    if (!isObjectType(memberType)) {
      context.reportError(`Union type ${union.name} can only include Object types, it cannot include ${inspect(memberType)}.`, getUnionMemberTypeNodes(union, String(memberType)));
    }
  }
}
function validateEnumValues(context, enumType) {
  const enumValues = enumType.getValues();
  if (enumValues.length === 0) {
    context.reportError(`Enum type ${enumType.name} must define one or more values.`, [enumType.astNode, ...enumType.extensionASTNodes]);
  }
  for (const enumValue of enumValues) {
    validateName(context, enumValue);
  }
}
function validateInputFields(context, inputObj) {
  const fields = Object.values(inputObj.getFields());
  if (fields.length === 0) {
    context.reportError(`Input Object type ${inputObj.name} must define one or more fields.`, [inputObj.astNode, ...inputObj.extensionASTNodes]);
  }
  for (const field of fields) {
    validateName(context, field);
    if (!isInputType(field.type)) {
      var _field$astNode2;
      context.reportError(`The type of ${inputObj.name}.${field.name} must be Input Type but got: ${inspect(field.type)}.`, (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type);
    }
    if (isRequiredInputField(field) && field.deprecationReason != null) {
      var _field$astNode3;
      context.reportError(`Required input field ${inputObj.name}.${field.name} cannot be deprecated.`, [
        getDeprecatedDirectiveNode(field.astNode),
        (_field$astNode3 = field.astNode) === null || _field$astNode3 === void 0 ? void 0 : _field$astNode3.type
      ]);
    }
  }
}
function createInputObjectCircularRefsValidator(context) {
  const visitedTypes = Object.create(null);
  const fieldPath = [];
  const fieldPathIndexByTypeName = Object.create(null);
  return detectCycleRecursive;
  function detectCycleRecursive(inputObj) {
    if (visitedTypes[inputObj.name]) {
      return;
    }
    visitedTypes[inputObj.name] = true;
    fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
    const fields = Object.values(inputObj.getFields());
    for (const field of fields) {
      if (isNonNullType(field.type) && isInputObjectType(field.type.ofType)) {
        const fieldType = field.type.ofType;
        const cycleIndex = fieldPathIndexByTypeName[fieldType.name];
        fieldPath.push(field);
        if (cycleIndex === void 0) {
          detectCycleRecursive(fieldType);
        } else {
          const cyclePath = fieldPath.slice(cycleIndex);
          const pathStr = cyclePath.map((fieldObj) => fieldObj.name).join(".");
          context.reportError(`Cannot reference Input Object "${fieldType.name}" within itself through a series of non-null fields: "${pathStr}".`, cyclePath.map((fieldObj) => fieldObj.astNode));
        }
        fieldPath.pop();
      }
    }
    fieldPathIndexByTypeName[inputObj.name] = void 0;
  }
}
function getAllImplementsInterfaceNodes(type, iface) {
  const {astNode, extensionASTNodes} = type;
  const nodes = astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes;
  return nodes.flatMap((typeNode) => {
    var _typeNode$interfaces;
    return (_typeNode$interfaces = typeNode.interfaces) !== null && _typeNode$interfaces !== void 0 ? _typeNode$interfaces : [];
  }).filter((ifaceNode) => ifaceNode.name.value === iface.name);
}
function getUnionMemberTypeNodes(union, typeName) {
  const {astNode, extensionASTNodes} = union;
  const nodes = astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes;
  return nodes.flatMap((unionNode) => {
    var _unionNode$types;
    return (_unionNode$types = unionNode.types) !== null && _unionNode$types !== void 0 ? _unionNode$types : [];
  }).filter((typeNode) => typeNode.name.value === typeName);
}
function getDeprecatedDirectiveNode(definitionNode) {
  var _definitionNode$direc;
  return definitionNode === null || definitionNode === void 0 ? void 0 : (_definitionNode$direc = definitionNode.directives) === null || _definitionNode$direc === void 0 ? void 0 : _definitionNode$direc.find((node) => node.name.value === GraphQLDeprecatedDirective.name);
}
export {assertValidSchema, validateSchema};
export default null;
