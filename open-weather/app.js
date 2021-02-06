const axios = require('axios');
const { argv } = require('./config/yargs');

const encodeUrl = encodeURI(argv.address);
const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: encodeUrl,
    lat: '0',
    lon: '0',
    lang: 'Spanish-sp',
  },
  headers: {
    'x-rapidapi-key': 'ab97f0d1e7mshddd1ee339e1652ep1b25d0jsn1b2f36baa512',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(`El clima de ${argv.address} es de ${response.data.main.temp}`);
  })
  .catch((error) => {
    console.error(error);
  });
