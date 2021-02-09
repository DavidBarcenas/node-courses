const express = require('express');
const app = express();

app
  .use(express.static(__dirname + '/public'))
  //   .get('/', (req, res) => {
  //     let response = {
  //       name: 'Dave',
  //       age: 27,
  //       url: req.url,
  //     };
  //     res.send(response);
  //   })
  .listen(8080, () => {
    console.log('list port 8080');
  });
