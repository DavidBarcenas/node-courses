const express = require('express');
const app = express();

app
  .use(express.static(__dirname + '/public'))
  // hbs engine
  .set('view engine', 'hbs')
  .get('/', (req, res) => {
    res.render('home', {
      name: 'Daveepro',
      year: new Date().getFullYear(),
    });
  })
  .listen(8080, () => {
    console.log('list port 8080');
  });
