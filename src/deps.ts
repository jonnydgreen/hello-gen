// Deno.land
export { Command } from "https://deno.land/x/cliffy@v0.20.1/command/mod.ts";
export { EOL } from "https://deno.land/std@0.114.0/fs/eol.ts";
export {
  dirname,
  fromFileUrl,
  join,
} from "https://deno.land/std@0.114.0/path/mod.ts";

// Skypack CDN
export {
  extendSchema,
  GraphQLEnumType,
  GraphQLError,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLUnionType,
  isOutputType,
  isRequiredArgument,
  isTypeExtensionNode,
  Kind,
  parse,
} from "https://cdn.skypack.dev/graphql@v16.0.1?dts";
export type {
  DefinitionNode,
  GraphQLArgument,
  GraphQLField,
  GraphQLInputField,
  GraphQLInputType,
  GraphQLNamedType,
  GraphQLOutputType,
} from "https://cdn.skypack.dev/graphql@v16.0.1?dts";
export { default as Handlebars } from "https://cdn.skypack.dev/handlebars@4.7.7?dts";
