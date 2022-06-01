import {printBlockString} from "../language/blockString.js";
import {Lexer, isPunctuatorTokenKind} from "../language/lexer.js";
import {isSource, Source} from "../language/source.js";
import {TokenKind} from "../language/tokenKind.js";
import "../language/characterClasses.js";
import "../error/syntaxError.js";
import "../../common/GraphQLError-be1f809e.js";
import "../../common/location-1f330233.js";
import "../language/printLocation.js";
import "../language/ast.js";
import "../../common/devAssert-57a6c5bb.js";
import "../../common/inspect-3f8aaeec.js";
import "../../common/instanceOf-713807f7.js";
function stripIgnoredCharacters(source2) {
  const sourceObj = isSource(source2) ? source2 : new Source(source2);
  const body = sourceObj.body;
  const lexer2 = new Lexer(sourceObj);
  let strippedBody = "";
  let wasLastAddedTokenNonPunctuator = false;
  while (lexer2.advance().kind !== TokenKind.EOF) {
    const currentToken = lexer2.token;
    const tokenKind2 = currentToken.kind;
    const isNonPunctuator = !isPunctuatorTokenKind(currentToken.kind);
    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === TokenKind.SPREAD) {
        strippedBody += " ";
      }
    }
    const tokenBody = body.slice(currentToken.start, currentToken.end);
    if (tokenKind2 === TokenKind.BLOCK_STRING) {
      strippedBody += printBlockString(currentToken.value, {
        minimize: true
      });
    } else {
      strippedBody += tokenBody;
    }
    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }
  return strippedBody;
}
export {stripIgnoredCharacters};
export default null;
