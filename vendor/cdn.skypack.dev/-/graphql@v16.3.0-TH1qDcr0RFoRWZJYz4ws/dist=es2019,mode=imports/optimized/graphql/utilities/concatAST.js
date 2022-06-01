import {Kind} from "../language/kinds.js";
function concatAST(documents) {
  const definitions = [];
  for (const doc of documents) {
    definitions.push(...doc.definitions);
  }
  return {
    kind: Kind.DOCUMENT,
    definitions
  };
}
export {concatAST};
export default null;
