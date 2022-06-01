import {i as invariant} from "./location-1f330233.js";
import {G as GraphQLError} from "./GraphQLError-be1f809e.js";
import {V as getNamedType, o as isInputObjectType} from "./definition-c28e27a3.js";
import {isIntrospectionType} from "../graphql/type/introspection.js";
function NoDeprecatedCustomRule(context) {
  return {
    Field(node) {
      const fieldDef = context.getFieldDef();
      const deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;
      if (fieldDef && deprecationReason != null) {
        const parentType = context.getParentType();
        parentType != null || invariant(false);
        context.reportError(new GraphQLError(`The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}`, node));
      }
    },
    Argument(node) {
      const argDef = context.getArgument();
      const deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;
      if (argDef && deprecationReason != null) {
        const directiveDef = context.getDirective();
        if (directiveDef != null) {
          context.reportError(new GraphQLError(`Directive "@${directiveDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`, node));
        } else {
          const parentType = context.getParentType();
          const fieldDef = context.getFieldDef();
          parentType != null && fieldDef != null || invariant(false);
          context.reportError(new GraphQLError(`Field "${parentType.name}.${fieldDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`, node));
        }
      }
    },
    ObjectField(node) {
      const inputObjectDef = getNamedType(context.getParentInputType());
      if (isInputObjectType(inputObjectDef)) {
        const inputFieldDef = inputObjectDef.getFields()[node.name.value];
        const deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;
        if (deprecationReason != null) {
          context.reportError(new GraphQLError(`The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}`, node));
        }
      }
    },
    EnumValue(node) {
      const enumValueDef = context.getEnumValue();
      const deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;
      if (enumValueDef && deprecationReason != null) {
        const enumTypeDef = getNamedType(context.getInputType());
        enumTypeDef != null || invariant(false);
        context.reportError(new GraphQLError(`The enum value "${enumTypeDef.name}.${enumValueDef.name}" is deprecated. ${deprecationReason}`, node));
      }
    }
  };
}
function NoSchemaIntrospectionCustomRule(context) {
  return {
    Field(node) {
      const type = getNamedType(context.getType());
      if (type && isIntrospectionType(type)) {
        context.reportError(new GraphQLError(`GraphQL introspection has been disabled, but the requested query contained the field "${node.name.value}".`, node));
      }
    }
  };
}
export {NoDeprecatedCustomRule as N, NoSchemaIntrospectionCustomRule as a};
export default null;
