var http = require('http');
var output = require('./output');


http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(output.number());
  res.write(output.accountBalance());
  res.end();
}).listen(3000);
