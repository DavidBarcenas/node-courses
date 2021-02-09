const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('capitalize', (text) => {
  let upper = text.substring(0, 1).toUpperCase();
  let rest = text.substring(1).toLowerCase();
  return upper + rest;
});
app
  .use(express.static(__dirname + '/public'))
  // hbs engine
  .set('view engine', 'hbs')
  .get('/', (req, res) => {
    res.render('home', {
      name: 'Daveepro',
    });
  })
  .get('/about', (req, res) => {
    res.render('about');
  })
  .listen(8080, () => {
    console.log('list port 8080');
  });
