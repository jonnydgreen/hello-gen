import {isWhiteSpace} from "./characterClasses.js";
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent = leadingWhitespace(line);
    if (indent === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent < commonIndent) {
      commonIndent = indent;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function isPrintableAsBlockString(value) {
  if (value === "") {
    return true;
  }
  let isEmptyLine = true;
  let hasIndent = false;
  let hasCommonIndent = true;
  let seenNonEmptyLine = false;
  for (let i = 0; i < value.length; ++i) {
    switch (value.codePointAt(i)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 11:
      case 12:
      case 14:
      case 15:
        return false;
      case 13:
        return false;
      case 10:
        if (isEmptyLine && !seenNonEmptyLine) {
          return false;
        }
        seenNonEmptyLine = true;
        isEmptyLine = true;
        hasIndent = false;
        break;
      case 9:
      case 32:
        hasIndent || (hasIndent = isEmptyLine);
        break;
      default:
        hasCommonIndent && (hasCommonIndent = hasIndent);
        isEmptyLine = false;
    }
  }
  if (isEmptyLine) {
    return false;
  }
  if (hasCommonIndent && seenNonEmptyLine) {
    return false;
  }
  return true;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}
export {dedentBlockStringLines, isPrintableAsBlockString, printBlockString};
export default null;
