const yargs = require('yargs');

const description = {
  demandOption: true,
  alias: 'd',
},

const completed = {
  alias: 'c',
  default: true,
},

const argv = yargs
  .command('create', 'Create a task-todo', {
    description
  })
  .command('update', 'Update a task-todo', {
    description,
    completed,
  })
  .command('delete', 'Delete a task-todo', {
    description
  })
  .help().argv;

module.exports = {
  argv,
};
