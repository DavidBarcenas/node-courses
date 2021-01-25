const fs = require('fs');
let data = '';

let base = 5;

for (let i = 1; i <= 10; i++) {
  data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`table-${base}.txt`, data, (error) => {
  if (error) throw error;
  console.log('the file has been saved!');
});
