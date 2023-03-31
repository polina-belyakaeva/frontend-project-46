import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';
import parseFile from './parsers.js';

export const genDiff = (filepath1, filepath2) => {
    const data1 = parseFile(filepath1, (readFileSync(path.resolve(filepath1), 'utf-8')));
    const data2 = parseFile(filepath2, (readFileSync(path.resolve(filepath2), 'utf-8')));
    const result = [];

    const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

    for (const key of keys) {
        if (key in data1 && key in data2) {
            if (data1[key] === data2[key]) {
                result.push(`    ${key}: ${data1[key]}`);
            } else {
                result.push(`  - ${key}: ${data1[key]}`);
                result.push(`  + ${key}: ${data2[key]}`);
            }
        } else if (key in data1) {
            result.push(`  - ${key}: ${data1[key]}`);
        } else {
            result.push(`  + ${key}: ${data2[key]}`);
        }
    }

    result.unshift('{');
    result.push('}');

    return result.join('\n');
};
