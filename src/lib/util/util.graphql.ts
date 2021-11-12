import {
  GraphQLField,
  GraphQLInputType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLOutputType,
  GraphQLInputField,
  isOutputType,
} from "../../../deps.ts";

/**
 * Infer if a type is a GraphQL Field.
 */
export function isGraphQLInputField(
  field: unknown,
): field is GraphQLInputField {
  return (field as GraphQLInputField)?.astNode?.kind === "InputValueDefinition";
}

/**
 * Infer if a type is a GraphQL Field.
 */
export function isGraphQLField(
  field: unknown,
): field is GraphQLField<unknown, unknown> {
  return isOutputType((field as GraphQLField<unknown, unknown>).type);
}

/**
 * Get GraphQL Type name
 */
export function getGraphQLTypeName(
  type: GraphQLInputType | GraphQLOutputType,
): string {
  if (type instanceof GraphQLNonNull || type instanceof GraphQLList) {
    return getGraphQLTypeName(type.ofType);
  }
  return type.toString();
}
