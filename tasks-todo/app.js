const { argv } = require('./config/yargs');
const task = require('./tasks/task-todo');
let command = argv._[0];

switch (command) {
  case 'create':
    let taskTodo = task.create(argv.description);
    console.log(taskTodo);
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
