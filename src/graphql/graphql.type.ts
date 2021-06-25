import { GraphQLObjectType, GraphQLInputObjectType, GraphQLInterfaceType } from 'graphql'
import { EnumTypeDef, ObjectTypeDef, ScalarTypeDef, UnionTypeDef } from '../typescript'

export type GraphQLParentType = GraphQLObjectType | GraphQLInputObjectType | GraphQLInterfaceType

export interface GraphQLSchemaTypes {
  SCALAR?: ScalarTypeDef[]
  ENUM?: EnumTypeDef[]
  INPUT_OBJECT?: ObjectTypeDef[]
  INTERFACE?: ObjectTypeDef[]
  OBJECT?: ObjectTypeDef[]
  UNION?: UnionTypeDef[]
  ROOT?: ObjectTypeDef[]
}
