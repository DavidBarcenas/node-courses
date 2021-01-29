const yargs = require('yargs');
const { createFile, listTable } = require('./multiply/table');

let argv = yargs
  .command('list', 'Print the multiplication table on the console', {
    base: {
      alias: 'b',
      demandOption: true,
    },
    limit: {
      alias: 'l',
      default: 10,
    },
  })
  .command('create', 'create the table files', {
    base: {
      alias: 'b',
      demandOption: true,
    },
    limit: {
      alias: 'l',
      default: 10,
    },
  })
  .help().argv;

let command = argv._[0];

switch (command) {
  case 'list':
    listTable(argv.base, argv.limit);
    break;

  case 'create':
    createFile(argv.base, argv.limit)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
    break;

  default:
    console.log('command not recognized');
    break;
}
