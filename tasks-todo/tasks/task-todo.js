const fs = require('fs');

let taskList = [];

const db = () => {
  let data = JSON.stringify(taskList);
  fs.writeFile('./tasks/data.json', data, (err) => {
    if (err) throw new Error('Could not be created', err);
  });
};

const uploadDB = () => {
  try {
    taskList = require('./data.json');
  } catch (error) {
    taskList = [];
  }
};

const create = (desc) => {
  uploadDB();
  let task = {
    desc,
    completed: false,
  };
  taskList = [...taskList, task];
  db();
  return task;
};

module.exports = {
  create,
};
