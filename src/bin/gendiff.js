#!/usr/bin/env node
import { Command } from 'commander';
import { genDiff } from '../genDiff.js';
const program = new Command();

program
  .version('0.0.0')
  .description('Compares two configuration files and shows a difference')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2)); 
  });

program.parse();