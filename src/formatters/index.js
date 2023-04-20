import formatStylish from "./stylish.js";
import formatPlain from "./plain.js";
import formatJSON from "./json.js";

const chooseFormat = (diffTree, formatName) => {
  switch (formatName) {
    case "stylish":
      return formatStylish(diffTree);
    case "plain":
      return formatPlain(diffTree);
    case "json":
      return formatJSON(diffTree);
    default:
      throw new Error(`Unknown formatter name: ${formatName}`);
  }
};

export default chooseFormat;
