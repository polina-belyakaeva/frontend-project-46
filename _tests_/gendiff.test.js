import { test, expect } from "@jest/globals";
import { fileURLToPath } from "url";
import path from "path";
import { readFileSync } from "fs";
import { getDir } from "../src/helper.js";
import { genDiff } from "../src/genDiff.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = getDir(__filename);

const stylishExpected = readFileSync(
  path.resolve(__dirname, "../__fixtures__", "stylish_expected.txt"),
  "utf-8"
);

const plainExpected = readFileSync(
  path.resolve(__dirname, "../__fixtures__", "plain_expected.txt"),
  "utf-8"
);

const JSONExpected = readFileSync(
  path.resolve(__dirname, "../__fixtures__", "json_expected.txt"),
  "utf-8"
);

test("JSON test", () => {
  const path1 = path.resolve(__dirname, "../__fixtures__", "file1.json");
  const path2 = path.resolve(__dirname, "../__fixtures__", "file2.json");

  expect(genDiff(path1, path2)).toEqual(stylishExpected);
  expect(genDiff(path1, path2, "stylish")).toEqual(stylishExpected);
  expect(genDiff(path1, path2, "plain")).toEqual(plainExpected);
  expect(genDiff(path1, path2, "json")).toEqual(JSONExpected);
});

test("YAML test", () => {
  const path1 = path.resolve(__dirname, "../__fixtures__", "file1.yaml");
  const path2 = path.resolve(__dirname, "../__fixtures__", "file2.yml");

  expect(genDiff(path1, path2)).toEqual(stylishExpected);
  expect(genDiff(path1, path2, "stylish")).toEqual(stylishExpected);
  expect(genDiff(path1, path2, "plain")).toEqual(plainExpected);
  expect(() => JSON.parse(genDiff(path1, path2, "json"))).not.toThrow();
});
