import {d as devAssert} from "./common/devAssert-57a6c5bb.js";
import {i as isPromise, e as execute} from "./common/execute-2127bc1b.js";
export {d as defaultFieldResolver, b as defaultTypeResolver, e as execute, a as executeSync} from "./common/execute-2127bc1b.js";
import {parse} from "./graphql/language/parser.js";
export {parse, parseConstValue, parseType, parseValue} from "./graphql/language/parser.js";
import {validateSchema} from "./graphql/type/validate.js";
export {assertValidSchema, validateSchema} from "./graphql/type/validate.js";
import {validate as validate4} from "./graphql/validation/validate.js";
export {validate} from "./graphql/validation/validate.js";
export {e as GraphQLEnumType, f as GraphQLInputObjectType, c as GraphQLInterfaceType, g as GraphQLList, h as GraphQLNonNull, b as GraphQLObjectType, G as GraphQLScalarType, d as GraphQLUnionType, Q as assertAbstractType, P as assertCompositeType, I as assertEnumType, J as assertInputObjectType, M as assertInputType, F as assertInterfaceType, O as assertLeafType, K as assertListType, T as assertNamedType, L as assertNonNullType, S as assertNullableType, E as assertObjectType, N as assertOutputType, D as assertScalarType, C as assertType, H as assertUnionType, R as assertWrappingType, V as getNamedType, U as getNullableType, w as isAbstractType, v as isCompositeType, n as isEnumType, o as isInputObjectType, s as isInputType, l as isInterfaceType, u as isLeafType, p as isListType, z as isNamedType, q as isNonNullType, y as isNullableType, k as isObjectType, t as isOutputType, A as isRequiredArgument, B as isRequiredInputField, j as isScalarType, i as isType, m as isUnionType, x as isWrappingType, r as resolveObjMapThunk, a as resolveReadonlyArrayThunk} from "./common/definition-c28e27a3.js";
export {GraphQLSchema, assertSchema, isSchema} from "./graphql/type/schema.js";
export {DEFAULT_DEPRECATION_REASON, GraphQLDeprecatedDirective, GraphQLDirective, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLSpecifiedByDirective, assertDirective, isDirective, isSpecifiedDirective, specifiedDirectives} from "./graphql/type/directives.js";
export {GRAPHQL_MAX_INT, GRAPHQL_MIN_INT, GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLString, isSpecifiedScalarType, specifiedScalarTypes} from "./graphql/type/scalars.js";
export {SchemaMetaFieldDef, TypeKind, TypeMetaFieldDef, TypeNameMetaFieldDef, __Directive, __DirectiveLocation, __EnumValue, __Field, __InputValue, __Schema, __Type, __TypeKind, introspectionTypes, isIntrospectionType} from "./graphql/type/introspection.js";
export {assertEnumValueName, assertName} from "./graphql/type/assertName.js";
export {Location, OperationTypeNode, Token} from "./graphql/language/ast.js";
export {Source} from "./graphql/language/source.js";
export {g as getLocation} from "./common/location-1f330233.js";
export {printLocation, printSourceLocation} from "./graphql/language/printLocation.js";
export {Lexer} from "./graphql/language/lexer.js";
export {TokenKind} from "./graphql/language/tokenKind.js";
export {print} from "./graphql/language/printer.js";
export {BREAK, getEnterLeaveForKind, getVisitFn, visit, visitInParallel} from "./graphql/language/visitor.js";
export {Kind} from "./graphql/language/kinds.js";
export {DirectiveLocation} from "./graphql/language/directiveLocation.js";
export {isConstValueNode, isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isTypeDefinitionNode, isTypeExtensionNode, isTypeNode, isTypeSystemDefinitionNode, isTypeSystemExtensionNode, isValueNode} from "./graphql/language/predicates.js";
export {c as coerceInputValue, p as responsePathAsArray} from "./common/coerceInputValue-d674a53b.js";
export {getDirectiveValues, getVariableValues} from "./graphql/execution/values.js";
export {createSourceEventStream, subscribe} from "./graphql/execution/subscribe.js";
export {ValidationContext} from "./graphql/validation/ValidationContext.js";
export {E as ExecutableDefinitionsRule, F as FieldsOnCorrectTypeRule, a as FragmentsOnCompositeTypesRule, K as KnownArgumentNamesRule, b as KnownDirectivesRule, c as KnownFragmentNamesRule, d as KnownTypeNamesRule, L as LoneAnonymousOperationRule, q as LoneSchemaDefinitionRule, N as NoFragmentCyclesRule, e as NoUndefinedVariablesRule, f as NoUnusedFragmentsRule, g as NoUnusedVariablesRule, O as OverlappingFieldsCanBeMergedRule, P as PossibleFragmentSpreadsRule, y as PossibleTypeExtensionsRule, h as ProvidedRequiredArgumentsRule, S as ScalarLeafsRule, i as SingleFieldSubscriptionsRule, w as UniqueArgumentDefinitionNamesRule, U as UniqueArgumentNamesRule, x as UniqueDirectiveNamesRule, j as UniqueDirectivesPerLocationRule, u as UniqueEnumValueNamesRule, v as UniqueFieldDefinitionNamesRule, k as UniqueFragmentNamesRule, l as UniqueInputFieldNamesRule, m as UniqueOperationNamesRule, r as UniqueOperationTypesRule, t as UniqueTypeNamesRule, n as UniqueVariableNamesRule, V as ValuesOfCorrectTypeRule, o as VariablesAreInputTypesRule, p as VariablesInAllowedPositionRule, s as specifiedRules} from "./common/specifiedRules-2f4e8060.js";
export {N as NoDeprecatedCustomRule, a as NoSchemaIntrospectionCustomRule} from "./common/NoSchemaIntrospectionCustomRule-3827cd02.js";
export {G as GraphQLError, f as formatError, p as printError} from "./common/GraphQLError-be1f809e.js";
export {syntaxError} from "./graphql/error/syntaxError.js";
export {locatedError} from "./graphql/error/locatedError.js";
export {getIntrospectionQuery} from "./graphql/utilities/getIntrospectionQuery.js";
export {getOperationAST} from "./graphql/utilities/getOperationAST.js";
export {getOperationRootType} from "./graphql/utilities/getOperationRootType.js";
export {introspectionFromSchema} from "./graphql/utilities/introspectionFromSchema.js";
export {buildClientSchema} from "./graphql/utilities/buildClientSchema.js";
export {buildASTSchema, buildSchema} from "./graphql/utilities/buildASTSchema.js";
export {extendSchema} from "./graphql/utilities/extendSchema.js";
export {lexicographicSortSchema} from "./graphql/utilities/lexicographicSortSchema.js";
export {printIntrospectionSchema, printSchema, printType} from "./graphql/utilities/printSchema.js";
export {typeFromAST} from "./graphql/utilities/typeFromAST.js";
export {valueFromAST} from "./graphql/utilities/valueFromAST.js";
export {v as valueFromASTUntyped} from "./common/valueFromASTUntyped-4278892e.js";
export {astFromValue} from "./graphql/utilities/astFromValue.js";
export {TypeInfo, visitWithTypeInfo} from "./graphql/utilities/TypeInfo.js";
export {concatAST} from "./graphql/utilities/concatAST.js";
export {separateOperations} from "./graphql/utilities/separateOperations.js";
export {stripIgnoredCharacters} from "./graphql/utilities/stripIgnoredCharacters.js";
export {doTypesOverlap, isEqualType, isTypeSubTypeOf} from "./graphql/utilities/typeComparators.js";
export {assertValidName, isValidNameError} from "./graphql/utilities/assertValidName.js";
export {BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges} from "./graphql/utilities/findBreakingChanges.js";
import "./common/inspect-3f8aaeec.js";
import "./common/isIterableObject-93462344.js";
import "./graphql/execution/collectFields.js";
import "./common/instanceOf-713807f7.js";
import "./common/naturalCompare-f2043bd2.js";
import "./graphql/language/characterClasses.js";
import "./graphql/language/blockString.js";
import "./graphql/language/printString.js";
import "./graphql/execution/mapAsyncIterator.js";
import "./graphql/utilities/sortValueNode.js";
const version = "16.3.0";
const versionInfo = Object.freeze({
  major: 16,
  minor: 3,
  patch: 0,
  preReleaseTag: null
});
function graphql(args) {
  return new Promise((resolve) => resolve(graphqlImpl(args)));
}
function graphqlSync(args) {
  const result = graphqlImpl(args);
  if (isPromise(result)) {
    throw new Error("GraphQL execution failed to complete synchronously.");
  }
  return result;
}
function graphqlImpl(args) {
  arguments.length < 2 || devAssert(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
  const {
    schema: schema2,
    source: source2,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver
  } = args;
  const schemaValidationErrors = validateSchema(schema2);
  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  }
  let document;
  try {
    document = parse(source2);
  } catch (syntaxError3) {
    return {
      errors: [syntaxError3]
    };
  }
  const validationErrors = validate4(schema2, document);
  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  }
  return execute({
    schema: schema2,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver
  });
}
export {graphql, graphqlSync, version, versionInfo};
export default null;
