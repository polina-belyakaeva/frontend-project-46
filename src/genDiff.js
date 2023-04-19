import { readFileSync } from "fs";
import path from "path";
import parseFile from "./parsers.js";
import buildTree from "./buildTree.js";
import chooseFormat from "./formatters/index.js";

export const genDiff = (filepath1, filepath2, formatName = "stylish") => {
  const data1 = parseFile(
    filepath1,
    readFileSync(path.resolve(filepath1), "utf-8")
  );
  const data2 = parseFile(
    filepath2,
    readFileSync(path.resolve(filepath2), "utf-8")
  );

  const newTree = buildTree(data1, data2);

  return chooseFormat(newTree, formatName);
};

export default genDiff;
