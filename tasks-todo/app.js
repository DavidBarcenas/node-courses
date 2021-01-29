const { argv } = require('./config/yargs');
const task = require('./tasks/task-todo');
const colors = require('colors');
let command = argv._[0];

switch (command) {
  case 'create':
    let taskTodo = task.create(argv.description);
    console.log(taskTodo);
    break;
  case 'list':
    let list = task.getList();
    list.map((task) => {
      console.log('======task to do ======'.green);
      console.log(task.desc);
      console.log('Status:', task.completed);
      console.log('======================='.green);
    });
    break;
  case 'update':
    console.log('update todo', argv.completed);
    break;
  default:
    console.log('command not recognized');
    break;
}
