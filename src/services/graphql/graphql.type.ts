import {
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
} from "../../../deps.ts";
import {
  EnumTypeDef,
  ObjectTypeDef,
  ScalarTypeDef,
  UnionTypeDef,
} from "../typescript/index.ts";

export type GraphQLParentType =
  | GraphQLObjectType
  | GraphQLInputObjectType
  | GraphQLInterfaceType;

export interface GraphQLSchemaTypes {
  SCALAR?: ScalarTypeDef[];
  ENUM?: EnumTypeDef[];
  INPUT_OBJECT?: ObjectTypeDef[];
  INTERFACE?: ObjectTypeDef[];
  OBJECT?: ObjectTypeDef[];
  UNION?: UnionTypeDef[];
  ROOT_INPUT_OBJECT?: ObjectTypeDef[];
  ROOT?: ObjectTypeDef[];
}

export interface GenerateResult {
  schema: string;
  resolvers: Record<string, string>;
}
