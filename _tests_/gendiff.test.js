import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import { getDir } from '../src/helper.js';
import { genDiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = getDir(__filename);

const expectedOutput = 
`{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

test('JSON test', () => {
    const path1 = path.resolve(__dirname, '../__fixtures__', 'file1.json');
    const path2 = path.resolve(__dirname, '../__fixtures__', 'file2.json');

    expect(genDiff(path1, path2)).toEqual(expectedOutput);
});

test('YAML test', () => {
    const path1 = path.resolve(__dirname, '../__fixtures__', 'file1.yml');
    const path2 = path.resolve(__dirname, '../__fixtures__', 'file2.yml');

    expect(genDiff(path1, path2)).toEqual(expectedOutput);
});
