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

const getList = () => {
  uploadDB();
  return taskList;
};

const update = (desc, completed = true) => {
  uploadDB();
  const index = taskList.findIndex((task) => task.desc === desc);
  if (index >= 0) {
    taskList[index].completed = completed;
    db();
    return true;
  }

  return false;
};

const deleteTask = (desc) => {
  uploadDB();
  const index = taskList.findIndex((task) => task.desc === desc);
  if (index >= 0) {
    taskList.splice(index, 1);
    db();
    return true;
  }

  return false;
};

module.exports = {
  create,
  getList,
  update,
  deleteTask,
};
