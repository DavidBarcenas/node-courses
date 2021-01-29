const yargs = require('yargs');

const argv = yargs
  .command('create', 'Create a task-todo', {
    description: {
      demandOption: true,
      alias: 'd',
    },
  })
  .command('update', 'Update a task-todo', {
    description: {
      demandOption: true,
      alias: 'd',
    },
    completed: {
      alias: 'c',
      default: true,
    },
  })
  .help().argv;

module.exports = {
  argv,
};
