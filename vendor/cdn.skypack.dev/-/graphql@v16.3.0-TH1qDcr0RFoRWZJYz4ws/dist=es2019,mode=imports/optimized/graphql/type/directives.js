import {d as devAssert} from "../../common/devAssert-57a6c5bb.js";
import {i as inspect} from "../../common/inspect-3f8aaeec.js";
import {i as instanceOf} from "../../common/instanceOf-713807f7.js";
import {i as isObjectLike} from "../../common/GraphQLError-be1f809e.js";
import {W as toObjMap, X as defineArguments, Y as argsToArgsConfig, h as GraphQLNonNull} from "../../common/definition-c28e27a3.js";
import {DirectiveLocation} from "../language/directiveLocation.js";
import {assertName as assertName2} from "./assertName.js";
import {GraphQLBoolean, GraphQLString} from "./scalars.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../../common/valueFromASTUntyped-4278892e.js";
import "../language/kinds.js";
import "../../common/naturalCompare-f2043bd2.js";
import "../language/printer.js";
import "../language/blockString.js";
import "../language/characterClasses.js";
import "../language/printString.js";
import "../language/visitor.js";
import "../language/ast.js";
function isDirective(directive) {
  return instanceOf(directive, GraphQLDirective);
}
function assertDirective(directive) {
  if (!isDirective(directive)) {
    throw new Error(`Expected ${inspect(directive)} to be a GraphQL directive.`);
  }
  return directive;
}
class GraphQLDirective {
  constructor(config) {
    var _config$isRepeatable, _config$args;
    this.name = assertName2(config.name);
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    Array.isArray(config.locations) || devAssert(false, `@${config.name} locations must be an Array.`);
    const args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
    isObjectLike(args) && !Array.isArray(args) || devAssert(false, `@${config.name} args must be an object with argument names as keys.`);
    this.args = defineArguments(args);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: argsToArgsConfig(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  }
  toString() {
    return "@" + this.name;
  }
  toJSON() {
    return this.toString();
  }
}
const GraphQLIncludeDirective = new GraphQLDirective({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "Included when true."
    }
  }
});
const GraphQLSkipDirective = new GraphQLDirective({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "Skipped when true."
    }
  }
});
const DEFAULT_DEPRECATION_REASON = "No longer supported";
const GraphQLDeprecatedDirective = new GraphQLDirective({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    DirectiveLocation.FIELD_DEFINITION,
    DirectiveLocation.ARGUMENT_DEFINITION,
    DirectiveLocation.INPUT_FIELD_DEFINITION,
    DirectiveLocation.ENUM_VALUE
  ],
  args: {
    reason: {
      type: GraphQLString,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
const GraphQLSpecifiedByDirective = new GraphQLDirective({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [DirectiveLocation.SCALAR],
  args: {
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
const specifiedDirectives = Object.freeze([
  GraphQLIncludeDirective,
  GraphQLSkipDirective,
  GraphQLDeprecatedDirective,
  GraphQLSpecifiedByDirective
]);
function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(({name}) => name === directive.name);
}
export {DEFAULT_DEPRECATION_REASON, GraphQLDeprecatedDirective, GraphQLDirective, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLSpecifiedByDirective, assertDirective, isDirective, isSpecifiedDirective, specifiedDirectives};
export default null;
