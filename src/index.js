import { readFileSync } from 'fs';
import path from 'path';
import parseFile from './parsers.js';
import buildTree from './buildTree.js'
import changeDiffTree from './stylish.js'


export const genDiff = (filepath1, filepath2, format = 'stylish') => {
const data1 = parseFile(filepath1, (readFileSync(path.resolve(filepath1), 'utf-8')));
const data2 = parseFile(filepath2, (readFileSync(path.resolve(filepath2), 'utf-8')));

const newTree = buildTree(data1, data2);
const diffs =  changeDiffTree (newTree, format);

return diffs;
};

export default genDiff;