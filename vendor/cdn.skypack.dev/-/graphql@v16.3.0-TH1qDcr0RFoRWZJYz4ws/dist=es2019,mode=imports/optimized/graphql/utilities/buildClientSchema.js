import {d as devAssert} from "../../common/devAssert-57a6c5bb.js";
import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {i as isObjectLike} from "../../common/GraphQLError-be1f809e.js";
import {k as keyValMap} from "../../common/valueFromASTUntyped-4278892e.js";
import {parseValue} from "../language/parser.js";
import {E as assertObjectType, f as GraphQLInputObjectType, e as GraphQLEnumType, d as GraphQLUnionType, c as GraphQLInterfaceType, b as GraphQLObjectType, G as GraphQLScalarType, t as isOutputType, s as isInputType, g as GraphQLList, h as GraphQLNonNull, S as assertNullableType, F as assertInterfaceType} from "../../common/definition-c28e27a3.js";
import {GraphQLDirective} from "../type/directives.js";
import {introspectionTypes, TypeKind} from "../type/introspection.js";
import {specifiedScalarTypes} from "../type/scalars.js";
import {GraphQLSchema} from "../type/schema.js";
import {valueFromAST as valueFromAST2} from "./valueFromAST.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../language/kinds.js";
import "../error/syntaxError.js";
import "../language/ast.js";
import "../language/directiveLocation.js";
import "../language/lexer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/tokenKind.js";
import "../language/source.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../type/assertName.js";
import "./astFromValue.js";
import "../../common/isIterableObject-93462344.js";
function buildClientSchema(introspection2, options) {
  isObjectLike(introspection2) && isObjectLike(introspection2.__schema) || devAssert(false, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${inspect(introspection2)}.`);
  const schemaIntrospection = introspection2.__schema;
  const typeMap = keyValMap(schemaIntrospection.types, (typeIntrospection) => typeIntrospection.name, (typeIntrospection) => buildType(typeIntrospection));
  for (const stdType of [...specifiedScalarTypes, ...introspectionTypes]) {
    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  }
  const queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  const mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  const subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;
  const directives2 = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];
  return new GraphQLSchema({
    description: schemaIntrospection.description,
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: Object.values(typeMap),
    directives: directives2,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  });
  function getType(typeRef) {
    if (typeRef.kind === TypeKind.LIST) {
      const itemRef = typeRef.ofType;
      if (!itemRef) {
        throw new Error("Decorated type deeper than introspection query.");
      }
      return new GraphQLList(getType(itemRef));
    }
    if (typeRef.kind === TypeKind.NON_NULL) {
      const nullableRef = typeRef.ofType;
      if (!nullableRef) {
        throw new Error("Decorated type deeper than introspection query.");
      }
      const nullableType = getType(nullableRef);
      return new GraphQLNonNull(assertNullableType(nullableType));
    }
    return getNamedType(typeRef);
  }
  function getNamedType(typeRef) {
    const typeName = typeRef.name;
    if (!typeName) {
      throw new Error(`Unknown type reference: ${inspect(typeRef)}.`);
    }
    const type = typeMap[typeName];
    if (!type) {
      throw new Error(`Invalid or incomplete schema, unknown type: ${typeName}. Ensure that a full introspection query is used in order to build a client schema.`);
    }
    return type;
  }
  function getObjectType(typeRef) {
    return assertObjectType(getNamedType(typeRef));
  }
  function getInterfaceType(typeRef) {
    return assertInterfaceType(getNamedType(typeRef));
  }
  function buildType(type) {
    if (type != null && type.name != null && type.kind != null) {
      switch (type.kind) {
        case TypeKind.SCALAR:
          return buildScalarDef(type);
        case TypeKind.OBJECT:
          return buildObjectDef(type);
        case TypeKind.INTERFACE:
          return buildInterfaceDef(type);
        case TypeKind.UNION:
          return buildUnionDef(type);
        case TypeKind.ENUM:
          return buildEnumDef(type);
        case TypeKind.INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }
    const typeStr = inspect(type);
    throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${typeStr}.`);
  }
  function buildScalarDef(scalarIntrospection) {
    return new GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      specifiedByURL: scalarIntrospection.specifiedByURL
    });
  }
  function buildImplementationsList(implementingIntrospection) {
    if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === TypeKind.INTERFACE) {
      return [];
    }
    if (!implementingIntrospection.interfaces) {
      const implementingIntrospectionStr = inspect(implementingIntrospection);
      throw new Error(`Introspection result missing interfaces: ${implementingIntrospectionStr}.`);
    }
    return implementingIntrospection.interfaces.map(getInterfaceType);
  }
  function buildObjectDef(objectIntrospection) {
    return new GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: () => buildImplementationsList(objectIntrospection),
      fields: () => buildFieldDefMap(objectIntrospection)
    });
  }
  function buildInterfaceDef(interfaceIntrospection) {
    return new GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      interfaces: () => buildImplementationsList(interfaceIntrospection),
      fields: () => buildFieldDefMap(interfaceIntrospection)
    });
  }
  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      const unionIntrospectionStr = inspect(unionIntrospection);
      throw new Error(`Introspection result missing possibleTypes: ${unionIntrospectionStr}.`);
    }
    return new GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: () => unionIntrospection.possibleTypes.map(getObjectType)
    });
  }
  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      const enumIntrospectionStr = inspect(enumIntrospection);
      throw new Error(`Introspection result missing enumValues: ${enumIntrospectionStr}.`);
    }
    return new GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: keyValMap(enumIntrospection.enumValues, (valueIntrospection) => valueIntrospection.name, (valueIntrospection) => ({
        description: valueIntrospection.description,
        deprecationReason: valueIntrospection.deprecationReason
      }))
    });
  }
  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      const inputObjectIntrospectionStr = inspect(inputObjectIntrospection);
      throw new Error(`Introspection result missing inputFields: ${inputObjectIntrospectionStr}.`);
    }
    return new GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: () => buildInputValueDefMap(inputObjectIntrospection.inputFields)
    });
  }
  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error(`Introspection result missing fields: ${inspect(typeIntrospection)}.`);
    }
    return keyValMap(typeIntrospection.fields, (fieldIntrospection) => fieldIntrospection.name, buildField);
  }
  function buildField(fieldIntrospection) {
    const type = getType(fieldIntrospection.type);
    if (!isOutputType(type)) {
      const typeStr = inspect(type);
      throw new Error(`Introspection must provide output type for fields, but received: ${typeStr}.`);
    }
    if (!fieldIntrospection.args) {
      const fieldIntrospectionStr = inspect(fieldIntrospection);
      throw new Error(`Introspection result missing field args: ${fieldIntrospectionStr}.`);
    }
    return {
      description: fieldIntrospection.description,
      deprecationReason: fieldIntrospection.deprecationReason,
      type,
      args: buildInputValueDefMap(fieldIntrospection.args)
    };
  }
  function buildInputValueDefMap(inputValueIntrospections) {
    return keyValMap(inputValueIntrospections, (inputValue) => inputValue.name, buildInputValue);
  }
  function buildInputValue(inputValueIntrospection) {
    const type = getType(inputValueIntrospection.type);
    if (!isInputType(type)) {
      const typeStr = inspect(type);
      throw new Error(`Introspection must provide input type for arguments, but received: ${typeStr}.`);
    }
    const defaultValue = inputValueIntrospection.defaultValue != null ? valueFromAST2(parseValue(inputValueIntrospection.defaultValue), type) : void 0;
    return {
      description: inputValueIntrospection.description,
      type,
      defaultValue,
      deprecationReason: inputValueIntrospection.deprecationReason
    };
  }
  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      const directiveIntrospectionStr = inspect(directiveIntrospection);
      throw new Error(`Introspection result missing directive args: ${directiveIntrospectionStr}.`);
    }
    if (!directiveIntrospection.locations) {
      const directiveIntrospectionStr = inspect(directiveIntrospection);
      throw new Error(`Introspection result missing directive locations: ${directiveIntrospectionStr}.`);
    }
    return new GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      isRepeatable: directiveIntrospection.isRepeatable,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }
}
export {buildClientSchema};
export default null;
