import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {i as invariant} from "../../common/location-1f330233.js";
import {DirectiveLocation} from "../language/directiveLocation.js";
import {print} from "../language/printer.js";
import {astFromValue as astFromValue2} from "../utilities/astFromValue.js";
import {b as GraphQLObjectType, h as GraphQLNonNull, g as GraphQLList, e as GraphQLEnumType, j as isScalarType, k as isObjectType, l as isInterfaceType, m as isUnionType, n as isEnumType, o as isInputObjectType, p as isListType, q as isNonNullType, w as isAbstractType} from "../../common/definition-c28e27a3.js";
import {GraphQLString, GraphQLBoolean} from "./scalars.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../../common/devAssert-57a6c5bb.js";
import "../language/ast.js";
import "../language/kinds.js";
import "../../common/isIterableObject-93462344.js";
import "../../common/GraphQLError-be1f809e.js";
import "../language/printLocation.js";
import "../../common/instanceOf-713807f7.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../../common/naturalCompare-f2043bd2.js";
import "./assertName.js";
const __Schema = new GraphQLObjectType({
  name: "__Schema",
  description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
  fields: () => ({
    description: {
      type: GraphQLString,
      resolve: (schema) => schema.description
    },
    types: {
      description: "A list of all types supported by this server.",
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(__Type))),
      resolve(schema) {
        return Object.values(schema.getTypeMap());
      }
    },
    queryType: {
      description: "The type that query operations will be rooted at.",
      type: new GraphQLNonNull(__Type),
      resolve: (schema) => schema.getQueryType()
    },
    mutationType: {
      description: "If this server supports mutation, the type that mutation operations will be rooted at.",
      type: __Type,
      resolve: (schema) => schema.getMutationType()
    },
    subscriptionType: {
      description: "If this server support subscription, the type that subscription operations will be rooted at.",
      type: __Type,
      resolve: (schema) => schema.getSubscriptionType()
    },
    directives: {
      description: "A list of all directives supported by this server.",
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(__Directive))),
      resolve: (schema) => schema.getDirectives()
    }
  })
});
const __Directive = new GraphQLObjectType({
  name: "__Directive",
  description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (directive) => directive.name
    },
    description: {
      type: GraphQLString,
      resolve: (directive) => directive.description
    },
    isRepeatable: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (directive) => directive.isRepeatable
    },
    locations: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(__DirectiveLocation))),
      resolve: (directive) => directive.locations
    },
    args: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(__InputValue))),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(field, {includeDeprecated}) {
        return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
      }
    }
  })
});
const __DirectiveLocation = new GraphQLEnumType({
  name: "__DirectiveLocation",
  description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
  values: {
    QUERY: {
      value: DirectiveLocation.QUERY,
      description: "Location adjacent to a query operation."
    },
    MUTATION: {
      value: DirectiveLocation.MUTATION,
      description: "Location adjacent to a mutation operation."
    },
    SUBSCRIPTION: {
      value: DirectiveLocation.SUBSCRIPTION,
      description: "Location adjacent to a subscription operation."
    },
    FIELD: {
      value: DirectiveLocation.FIELD,
      description: "Location adjacent to a field."
    },
    FRAGMENT_DEFINITION: {
      value: DirectiveLocation.FRAGMENT_DEFINITION,
      description: "Location adjacent to a fragment definition."
    },
    FRAGMENT_SPREAD: {
      value: DirectiveLocation.FRAGMENT_SPREAD,
      description: "Location adjacent to a fragment spread."
    },
    INLINE_FRAGMENT: {
      value: DirectiveLocation.INLINE_FRAGMENT,
      description: "Location adjacent to an inline fragment."
    },
    VARIABLE_DEFINITION: {
      value: DirectiveLocation.VARIABLE_DEFINITION,
      description: "Location adjacent to a variable definition."
    },
    SCHEMA: {
      value: DirectiveLocation.SCHEMA,
      description: "Location adjacent to a schema definition."
    },
    SCALAR: {
      value: DirectiveLocation.SCALAR,
      description: "Location adjacent to a scalar definition."
    },
    OBJECT: {
      value: DirectiveLocation.OBJECT,
      description: "Location adjacent to an object type definition."
    },
    FIELD_DEFINITION: {
      value: DirectiveLocation.FIELD_DEFINITION,
      description: "Location adjacent to a field definition."
    },
    ARGUMENT_DEFINITION: {
      value: DirectiveLocation.ARGUMENT_DEFINITION,
      description: "Location adjacent to an argument definition."
    },
    INTERFACE: {
      value: DirectiveLocation.INTERFACE,
      description: "Location adjacent to an interface definition."
    },
    UNION: {
      value: DirectiveLocation.UNION,
      description: "Location adjacent to a union definition."
    },
    ENUM: {
      value: DirectiveLocation.ENUM,
      description: "Location adjacent to an enum definition."
    },
    ENUM_VALUE: {
      value: DirectiveLocation.ENUM_VALUE,
      description: "Location adjacent to an enum value definition."
    },
    INPUT_OBJECT: {
      value: DirectiveLocation.INPUT_OBJECT,
      description: "Location adjacent to an input object type definition."
    },
    INPUT_FIELD_DEFINITION: {
      value: DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: "Location adjacent to an input object field definition."
    }
  }
});
const __Type = new GraphQLObjectType({
  name: "__Type",
  description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
  fields: () => ({
    kind: {
      type: new GraphQLNonNull(__TypeKind),
      resolve(type) {
        if (isScalarType(type)) {
          return TypeKind.SCALAR;
        }
        if (isObjectType(type)) {
          return TypeKind.OBJECT;
        }
        if (isInterfaceType(type)) {
          return TypeKind.INTERFACE;
        }
        if (isUnionType(type)) {
          return TypeKind.UNION;
        }
        if (isEnumType(type)) {
          return TypeKind.ENUM;
        }
        if (isInputObjectType(type)) {
          return TypeKind.INPUT_OBJECT;
        }
        if (isListType(type)) {
          return TypeKind.LIST;
        }
        if (isNonNullType(type)) {
          return TypeKind.NON_NULL;
        }
        invariant(false, `Unexpected type: "${inspect(type)}".`);
      }
    },
    name: {
      type: GraphQLString,
      resolve: (type) => "name" in type ? type.name : void 0
    },
    description: {
      type: GraphQLString,
      resolve: (type) => "description" in type ? type.description : void 0
    },
    specifiedByURL: {
      type: GraphQLString,
      resolve: (obj) => "specifiedByURL" in obj ? obj.specifiedByURL : void 0
    },
    fields: {
      type: new GraphQLList(new GraphQLNonNull(__Field)),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(type, {includeDeprecated}) {
        if (isObjectType(type) || isInterfaceType(type)) {
          const fields = Object.values(type.getFields());
          return includeDeprecated ? fields : fields.filter((field) => field.deprecationReason == null);
        }
      }
    },
    interfaces: {
      type: new GraphQLList(new GraphQLNonNull(__Type)),
      resolve(type) {
        if (isObjectType(type) || isInterfaceType(type)) {
          return type.getInterfaces();
        }
      }
    },
    possibleTypes: {
      type: new GraphQLList(new GraphQLNonNull(__Type)),
      resolve(type, _args, _context, {schema}) {
        if (isAbstractType(type)) {
          return schema.getPossibleTypes(type);
        }
      }
    },
    enumValues: {
      type: new GraphQLList(new GraphQLNonNull(__EnumValue)),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(type, {includeDeprecated}) {
        if (isEnumType(type)) {
          const values = type.getValues();
          return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
        }
      }
    },
    inputFields: {
      type: new GraphQLList(new GraphQLNonNull(__InputValue)),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(type, {includeDeprecated}) {
        if (isInputObjectType(type)) {
          const values = Object.values(type.getFields());
          return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
        }
      }
    },
    ofType: {
      type: __Type,
      resolve: (type) => "ofType" in type ? type.ofType : void 0
    }
  })
});
const __Field = new GraphQLObjectType({
  name: "__Field",
  description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (field) => field.name
    },
    description: {
      type: GraphQLString,
      resolve: (field) => field.description
    },
    args: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(__InputValue))),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(field, {includeDeprecated}) {
        return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
      }
    },
    type: {
      type: new GraphQLNonNull(__Type),
      resolve: (field) => field.type
    },
    isDeprecated: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (field) => field.deprecationReason != null
    },
    deprecationReason: {
      type: GraphQLString,
      resolve: (field) => field.deprecationReason
    }
  })
});
const __InputValue = new GraphQLObjectType({
  name: "__InputValue",
  description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (inputValue) => inputValue.name
    },
    description: {
      type: GraphQLString,
      resolve: (inputValue) => inputValue.description
    },
    type: {
      type: new GraphQLNonNull(__Type),
      resolve: (inputValue) => inputValue.type
    },
    defaultValue: {
      type: GraphQLString,
      description: "A GraphQL-formatted string representing the default value for this input value.",
      resolve(inputValue) {
        const {type, defaultValue} = inputValue;
        const valueAST = astFromValue2(defaultValue, type);
        return valueAST ? print(valueAST) : null;
      }
    },
    isDeprecated: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (field) => field.deprecationReason != null
    },
    deprecationReason: {
      type: GraphQLString,
      resolve: (obj) => obj.deprecationReason
    }
  })
});
const __EnumValue = new GraphQLObjectType({
  name: "__EnumValue",
  description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (enumValue) => enumValue.name
    },
    description: {
      type: GraphQLString,
      resolve: (enumValue) => enumValue.description
    },
    isDeprecated: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (enumValue) => enumValue.deprecationReason != null
    },
    deprecationReason: {
      type: GraphQLString,
      resolve: (enumValue) => enumValue.deprecationReason
    }
  })
});
let TypeKind;
(function(TypeKind2) {
  TypeKind2["SCALAR"] = "SCALAR";
  TypeKind2["OBJECT"] = "OBJECT";
  TypeKind2["INTERFACE"] = "INTERFACE";
  TypeKind2["UNION"] = "UNION";
  TypeKind2["ENUM"] = "ENUM";
  TypeKind2["INPUT_OBJECT"] = "INPUT_OBJECT";
  TypeKind2["LIST"] = "LIST";
  TypeKind2["NON_NULL"] = "NON_NULL";
})(TypeKind || (TypeKind = {}));
const __TypeKind = new GraphQLEnumType({
  name: "__TypeKind",
  description: "An enum describing what kind of type a given `__Type` is.",
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: "Indicates this type is a scalar."
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
    },
    UNION: {
      value: TypeKind.UNION,
      description: "Indicates this type is a union. `possibleTypes` is a valid field."
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: "Indicates this type is an enum. `enumValues` is a valid field."
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: "Indicates this type is an input object. `inputFields` is a valid field."
    },
    LIST: {
      value: TypeKind.LIST,
      description: "Indicates this type is a list. `ofType` is a valid field."
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: "Indicates this type is a non-null. `ofType` is a valid field."
    }
  }
});
const SchemaMetaFieldDef = {
  name: "__schema",
  type: new GraphQLNonNull(__Schema),
  description: "Access the current type schema of this server.",
  args: [],
  resolve: (_source, _args, _context, {schema}) => schema,
  deprecationReason: void 0,
  extensions: Object.create(null),
  astNode: void 0
};
const TypeMetaFieldDef = {
  name: "__type",
  type: __Type,
  description: "Request the type information of a single type.",
  args: [
    {
      name: "name",
      description: void 0,
      type: new GraphQLNonNull(GraphQLString),
      defaultValue: void 0,
      deprecationReason: void 0,
      extensions: Object.create(null),
      astNode: void 0
    }
  ],
  resolve: (_source, {name}, _context, {schema}) => schema.getType(name),
  deprecationReason: void 0,
  extensions: Object.create(null),
  astNode: void 0
};
const TypeNameMetaFieldDef = {
  name: "__typename",
  type: new GraphQLNonNull(GraphQLString),
  description: "The name of the current Object type at runtime.",
  args: [],
  resolve: (_source, _args, _context, {parentType}) => parentType.name,
  deprecationReason: void 0,
  extensions: Object.create(null),
  astNode: void 0
};
const introspectionTypes = Object.freeze([
  __Schema,
  __Directive,
  __DirectiveLocation,
  __Type,
  __Field,
  __InputValue,
  __EnumValue,
  __TypeKind
]);
function isIntrospectionType(type) {
  return introspectionTypes.some(({name}) => type.name === name);
}
export {SchemaMetaFieldDef, TypeKind, TypeMetaFieldDef, TypeNameMetaFieldDef, __Directive, __DirectiveLocation, __EnumValue, __Field, __InputValue, __Schema, __Type, __TypeKind, introspectionTypes, isIntrospectionType};
export default null;
