const yargs = require('yargs');

const commandOpts = {
  base: {
    alias: 'b',
    demandOption: true,
  },
  limit: {
    alias: 'l',
    default: 10,
  },
};

let argv = yargs
  .command('list', 'Print the multiplication table on the console', commandOpts)
  .command('create', 'create the table files', commandOpts)
  .help().argv;

module.exports = {
  argv,
};
