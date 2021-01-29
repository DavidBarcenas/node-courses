const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {
  console.log('============'.green);
  console.log(`table from ${base} to ${limit}`.red);
  console.log('============'.green);

  for (let index = 1; index <= limit; index++) {
    console.log(base * index);
  }
};

let createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    let data = '';

    if (isNaN(base)) {
      reject('Error: Must be type number');
      return;
    }

    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`table-${base}.txt`, data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(`table-${base}.txt`);
      }
    });
  });
};

module.exports = {
  createFile,
  listTable,
};
