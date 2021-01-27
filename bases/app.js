const { createFile } = require('./multiply/table');
let base = 6;

createFile('d')
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
