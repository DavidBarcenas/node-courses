const yargs = require('yargs');

const argv = yargs
  .options({
    address: {
      alias: 'd',
      desc: 'city address to get the weather',
      demand: true,
    },
  })
  .argv();

module.exports = {
  argv,
};
