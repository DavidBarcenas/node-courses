const { argv } = require('./config/yargs');
const colors = require('colors');
const { createFile, listTable } = require('./multiply/table');

let command = argv._[0];

switch (command) {
  case 'list':
    listTable(argv.base, argv.limit);
    break;

  case 'create':
    createFile(argv.base, argv.limit)
      .then((resp) => {
        console.log(colors.brightCyan(resp));
      })
      .catch((error) => {
        console.error(error);
      });
    break;

  default:
    console.log('command not recognized');
    break;
}
