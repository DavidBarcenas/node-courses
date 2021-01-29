const { argv } = require('./config/yargs');
let command = argv._[0];

switch (command) {
  case 'create':
    console.log('create todo', argv.description);
    break;
  case 'list':
    console.log('list todo');
    break;
  case 'update':
    console.log('update todo', argv.completed);
    break;
  default:
    console.log('command not recognized');
    break;
}
