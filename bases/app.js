const { createFile } = require('./multiply/table');

let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];

createFile(base)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
