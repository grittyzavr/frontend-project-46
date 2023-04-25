#!/usr/bin/env node

import { Command } from 'commander';
import compare from '../src/compare.js';
import parse from '../src/parse.js';

const program = new Command();

program
  .name('gendiff')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format');

program.parse();

const filepath1 = program.args[0];
const filepath2 = program.args[1];

parse(filepath1, filepath2);
