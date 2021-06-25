import { GraphQLField, GraphQLInputType, GraphQLList, GraphQLNonNull, GraphQLOutputType, isOutputType } from 'graphql'

/**
 * Infer if a type is a GraphQL Field.
 */
export function isGraphQLField (field: any): field is GraphQLField<any, any> {
  return isOutputType(field.type)
}

/**
 * Get GraphQL Type name
 */
export function getGraphQLTypeName (type: GraphQLInputType | GraphQLOutputType): string {
  if (type instanceof GraphQLNonNull || type instanceof GraphQLList) {
    return getGraphQLTypeName(type.ofType)
  }
  return type.toString()
}
