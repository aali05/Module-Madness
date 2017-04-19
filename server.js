var http = require('http');
var random = require('./data');
var output = require('./output');
var convert = require('./convert');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(output.number());
  res.write(output.accountBalance());
  res.end();
}).listen(3000);
