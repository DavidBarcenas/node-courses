const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    // res.write('hello world');
    let response = {
      name: 'Dave',
      age: 27,
      url: req.url,
    };
    res.write(JSON.stringify(response));
    res.end();
  })
  .listen(8080);
console.log('listen port 8080');
