import formatStylish from "./stylish.js";
import formatPlain from "./plain.js";

const chooseFormat = (diffTree, formatName) => {
  switch (formatName) {
    case "stylish":
      return formatStylish(diffTree);
    case "plain":
      return formatPlain(diffTree);
    default:
      throw new Error(`Unknown formatter name: ${formatName}`);
  }
};

export default chooseFormat;
