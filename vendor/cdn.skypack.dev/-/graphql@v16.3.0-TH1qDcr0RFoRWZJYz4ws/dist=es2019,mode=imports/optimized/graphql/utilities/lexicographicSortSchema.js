import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {i as invariant} from "../../common/location-1f330233.js";
import {k as keyValMap} from "../../common/valueFromASTUntyped-4278892e.js";
import {n as naturalCompare} from "../../common/naturalCompare-f2043bd2.js";
import {j as isScalarType, k as isObjectType, b as GraphQLObjectType, l as isInterfaceType, c as GraphQLInterfaceType, m as isUnionType, d as GraphQLUnionType, n as isEnumType, e as GraphQLEnumType, o as isInputObjectType, f as GraphQLInputObjectType, p as isListType, g as GraphQLList, q as isNonNullType, h as GraphQLNonNull} from "../../common/definition-c28e27a3.js";
import {GraphQLDirective} from "../type/directives.js";
import {isIntrospectionType} from "../type/introspection.js";
import {GraphQLSchema} from "../type/schema.js";
import "../language/kinds.js";
import "../../common/devAssert-57a6c5bb.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/GraphQLError-be1f809e.js";
import "../language/printLocation.js";
import "../language/printer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../language/ast.js";
import "../type/assertName.js";
import "../language/directiveLocation.js";
import "../type/scalars.js";
import "./astFromValue.js";
import "../../common/isIterableObject-93462344.js";
function lexicographicSortSchema(schema2) {
  const schemaConfig = schema2.toConfig();
  const typeMap = keyValMap(sortByName(schemaConfig.types), (type) => type.name, sortNamedType);
  return new GraphQLSchema({
    ...schemaConfig,
    types: Object.values(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  });
  function replaceType(type) {
    if (isListType(type)) {
      return new GraphQLList(replaceType(type.ofType));
    } else if (isNonNullType(type)) {
      return new GraphQLNonNull(replaceType(type.ofType));
    }
    return replaceNamedType(type);
  }
  function replaceNamedType(type) {
    return typeMap[type.name];
  }
  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }
  function sortDirective(directive) {
    const config = directive.toConfig();
    return new GraphQLDirective({
      ...config,
      locations: sortBy(config.locations, (x) => x),
      args: sortArgs(config.args)
    });
  }
  function sortArgs(args) {
    return sortObjMap(args, (arg) => ({...arg, type: replaceType(arg.type)}));
  }
  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, (field) => ({
      ...field,
      type: replaceType(field.type),
      args: field.args && sortArgs(field.args)
    }));
  }
  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, (field) => ({
      ...field,
      type: replaceType(field.type)
    }));
  }
  function sortTypes(array) {
    return sortByName(array).map(replaceNamedType);
  }
  function sortNamedType(type) {
    if (isScalarType(type) || isIntrospectionType(type)) {
      return type;
    }
    if (isObjectType(type)) {
      const config = type.toConfig();
      return new GraphQLObjectType({
        ...config,
        interfaces: () => sortTypes(config.interfaces),
        fields: () => sortFields(config.fields)
      });
    }
    if (isInterfaceType(type)) {
      const config = type.toConfig();
      return new GraphQLInterfaceType({
        ...config,
        interfaces: () => sortTypes(config.interfaces),
        fields: () => sortFields(config.fields)
      });
    }
    if (isUnionType(type)) {
      const config = type.toConfig();
      return new GraphQLUnionType({
        ...config,
        types: () => sortTypes(config.types)
      });
    }
    if (isEnumType(type)) {
      const config = type.toConfig();
      return new GraphQLEnumType({
        ...config,
        values: sortObjMap(config.values, (value) => value)
      });
    }
    if (isInputObjectType(type)) {
      const config = type.toConfig();
      return new GraphQLInputObjectType({
        ...config,
        fields: () => sortInputFields(config.fields)
      });
    }
    invariant(false, "Unexpected type: " + inspect(type));
  }
}
function sortObjMap(map, sortValueFn) {
  const sortedMap = Object.create(null);
  for (const key of Object.keys(map).sort(naturalCompare)) {
    sortedMap[key] = sortValueFn(map[key]);
  }
  return sortedMap;
}
function sortByName(array) {
  return sortBy(array, (obj) => obj.name);
}
function sortBy(array, mapToKey) {
  return array.slice().sort((obj1, obj2) => {
    const key1 = mapToKey(obj1);
    const key2 = mapToKey(obj2);
    return naturalCompare(key1, key2);
  });
}
export {lexicographicSortSchema};
export default null;
