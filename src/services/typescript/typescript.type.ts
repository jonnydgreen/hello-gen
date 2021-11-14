import { Maybe } from "../../lib/index.ts";

export interface BaseTypeDef {
  name: string;
  comment: Maybe<string>;
}

export enum Types {
  SCALAR = "SCALAR",
  UNION = "UNION",
  OBJECT = "OBJECT",
  ENUM = "ENUM",
}

export enum FieldTypes {
  SCALAR = "SCALAR",
  UNION = "UNION",
  OBJECT = "OBJECT",
  ENUM = "ENUM",
  ARRAY = "ARRAY",
}

export interface BaseFieldTypeDef extends BaseTypeDef {
  typeName: string;
  args: FieldTypeDef[];
  nullable: boolean;
  // TODO: do we need this?
  promise: boolean;
  resolver?: boolean;
  argsInputName: string;
  parent?: string;
}

export type FieldArrayElementTypeDef = Pick<
  Exclude<FieldTypeDef, FieldArrayTypeDef>,
  "type" | "nullable"
>;

export interface FieldArrayTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.ARRAY;
  element: FieldArrayElementTypeDef;
  nullable: boolean;
}

export interface FieldScalarTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.SCALAR;
}

export interface FieldUnionTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.UNION;
}

export interface FieldObjectTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.OBJECT;
}

export interface FieldEnumTypeDef extends BaseFieldTypeDef {
  type: FieldTypes.ENUM;
}

export type FieldTypeDef =
  | FieldScalarTypeDef
  | FieldUnionTypeDef
  | FieldObjectTypeDef
  | FieldArrayTypeDef
  | FieldEnumTypeDef;

export interface ObjectTypeDef extends BaseTypeDef {
  type: Types.OBJECT;
  fields: FieldTypeDef[];
}

export interface ScalarTypeDef extends BaseTypeDef {
  type: Types.SCALAR;
}

export type UnionTypeTypeDef = Pick<BaseTypeDef, "name">;

export interface UnionTypeDef extends BaseTypeDef, Record<string, unknown> {
  type: Types.UNION;
  types: UnionTypeTypeDef[];
}

export type EnumValueTypeDef = BaseTypeDef;

export interface EnumTypeDef extends BaseTypeDef, Record<string, unknown> {
  type: Types.ENUM;
  values: EnumValueTypeDef[];
}

export interface Node<TData = Record<string, unknown>> {
  template: string;
  data: TData;
}

export interface ImportTypeDefSpecifier {
  name: string;
  specifier?: string;
}
export interface ImportTypeDefNodeData extends Record<string, unknown> {
  module: string;
  namedImports: ImportTypeDefSpecifier[];
}

export interface FieldTypedefNodeData {
  value: string;
  comment?: string;
}

export interface ObjectTypeDefNodeData
  extends Omit<ObjectTypeDef, "fields">, Record<string, unknown> {
  fields: FieldTypedefNodeData[];
}

export interface OpaqueTypeDef extends Record<string, unknown> {
  name: string;
  type: string;
}

export interface ClassDefMethodArg {
  name: string;
  typeName: string;
}

export interface ClassDefMethod {
  name: string;
  args: ClassDefMethodArg[];
  returnType: FieldTypeDef;
}

export interface ClassDef extends Record<string, unknown> {
  name: string;
  implementation: string;
  imports: Array<[string, ...ImportTypeDefSpecifier[]]>;
  methods: ClassDefMethod[];
}

export type TypeDef =
  | ObjectTypeDef
  | ScalarTypeDef
  | UnionTypeDef
  | EnumTypeDef;
