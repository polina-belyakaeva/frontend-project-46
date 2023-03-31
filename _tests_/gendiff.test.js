import { test, expect } from '@jest/globals';
// import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { getDir } from '../src/helper.js';
import { genDiff } from '../src/genDiff.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = getDir(__filename);

const path1 = path.resolve(__dirname, '../__fixtures__', 'file1.json');
const path2 = path.resolve(__dirname, '../__fixtures__', 'file2.json');

test('Gendiff', () => {
    expect(genDiff(path1, path2)).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});
