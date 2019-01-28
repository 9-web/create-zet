const fs = require('fs');
const path = require('path');
const config  = require('./config');
const chalk = require('chalk');
const util = require('util');


function doc(args = {}) {
  const params = {...config, ...args};
  const filePath = path.join(__dirname, 'template/doc/template.mdx');
  const writeFilePath = path.join(params.dir, params.file);

  fs.readFile(filePath, { encoding: 'utf8' }, function(err, data) {
    let cw = null;
    try {
      const tpl = data
      .replace(/\{\{name\}\}/g, params.name)
      .replace(/\{\{menu\}\}/g, params.menu);

      cw = fs.createWriteStream(writeFilePath);
      const isWrite = cw.write(tpl);
      cw.destroy();
      if (isWrite) {
        console.log(chalk.green('create file successful!'));
      } else {
        console.log(chalk.red('create file error!'));
      }
    } catch (error) {
      cw && cw.destroy();
      console.log(chalk.red(util.inspect(error)));
    }
  })
}

module.exports = {
  doc: doc,
}

doc();
