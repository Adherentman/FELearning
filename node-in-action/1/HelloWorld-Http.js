var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request',function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream('./projectblog.png').pipe(res);
})

server.listen(3000);

console.log('Server running at http://localhost: 3000/');