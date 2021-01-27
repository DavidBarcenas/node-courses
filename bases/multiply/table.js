const fs = require('fs');

let createFile = (base) => {
  return new Promise((resolve, reject) => {
    let data = '';

    if (isNaN(base)) {
      reject('Error: Must be type number');
      return;
    }

    for (let i = 1; i <= 10; i++) {
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
};
