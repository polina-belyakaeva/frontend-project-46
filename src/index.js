import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parseFile from './parsers.js';
import buildTree from './buildTree.js';
import chooseFormat from './formatters/index.js';

export const genDiff = (pathFile1, pathFile2, formatName = 'stylish') => {
  const getDir = (filepath) => path.dirname(filepath);
  const getExtension = (filePath) => path.extname(filePath).slice(1);
  const buildFullPath = (filePath) => path.resolve(getDir(fileURLToPath(import.meta.url)), '../__fixtures__', filePath);
  const getData = (filePath) => parseFile(readFileSync(filePath, 'utf-8'), getExtension(filePath));

  const dataFile1 = getData(buildFullPath(pathFile1));
  const dataFile2 = getData(buildFullPath(pathFile2));

  const diff = buildTree(dataFile1, dataFile2);

  return chooseFormat(diff, formatName);
};

export default genDiff;
