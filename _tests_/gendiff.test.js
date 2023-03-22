import { test, expect } from '@jest/globals';
import { genDiff } from '../src/genDiff';

const path1 = '/Users/polinabelakaeva/Desktop/proj/frontend-project-46/_fixtures_/file1.json';
const path2 = '/Users/polinabelakaeva/Desktop/proj/frontend-project-46/_fixtures_/file2.json';
const path3 = './_fixtures_/file1.json';
const path4 = './_fixtures_/file2.json';

test('Gendiff', () => {
    expect(genDiff(path1, path2)).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
    expect(genDiff(path3, path4)).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});
