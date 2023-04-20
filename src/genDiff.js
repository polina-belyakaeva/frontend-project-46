import { getDir } from "../src/helper.js";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import path from "path";
import parseFile from "./parsers.js";
import buildTree from "./buildTree.js";
import chooseFormat from "./formatters/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = getDir(__filename);

export const genDiff = (filepath1, filepath2, formatName = "stylish") => {
  const data1 = parseFile(
    filepath1,
    readFileSync(path.resolve(__dirname, "../__fixtures__", filepath1), "utf-8")
  );
  const data2 = parseFile(
    filepath2,
    readFileSync(path.resolve(__dirname, "../__fixtures__", filepath2), "utf-8")
  );

  const newTree = buildTree(data1, data2);

  return chooseFormat(newTree, formatName);
};

export default genDiff;
