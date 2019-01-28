#! /usr/bin/env node
var yargs = require('yargs');
var app = require('../src/app');

/**
 * options n:name 文件名, d:dir 目录地址， m:menu doc 菜单
 */

yargs.command('doc', 'create doc mdx', (argv) => {
  app.doc(argv.argv);
})

.option('f', {
  alias: 'file',
  demand: false,
  default: 'index.mdx',
  describe: '创建的文件名',
  type: 'string',
})
.option('n', {
  alias: 'name',
  demand: false,
  default: 'Component',
  describe: '组件名',
  type: 'string',
})
.option('m', {
  alias: 'menu',
  demand: false,
  default: 'Other',
  describe: '文档菜单',
  type: 'string',
})
.option('d', {
  alias: 'dir',
  demand: false,
  default: process.cwd(),
  describe: '文件目录地址',
  type: 'string',
})

.usage('Usage: zc doc [options]')
.example('zc doc -n index.mdx -d ./ -m other', '创建zet-component文档')
.help('h')
.alias('h', 'help')
.epilog('copyright 2019')
.argv;
