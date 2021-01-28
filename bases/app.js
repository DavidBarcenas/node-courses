const argv = require('yargs')
  .command('list', 'Print the multiplication table on the console', {
    base: {
      demandOption: true,
      alias: 'b',
    },
    limit: {
      alias: 'l',
      default: 10,
    },
  })
  .help().argv;
const { createFile } = require('./multiply/table');

let processArgv = process.argv;
console.log(argv.base, argv.limit);
// let param = argv[2];
// let base = param.split('=')[1];

// createFile(base)
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
