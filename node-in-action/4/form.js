var http = require('http');
var qs = require('querystring');

var items = [];

var server = http.createServer((req, res) => {
  if('/' == req.url){
    switch (req.method) {
      case 'GET':
        show(res);
        break;
      case 'POST':
        add(req, res);
        break;
      default:
        badRequest(res);
        break;
    } 
  } else {
    notFound(res);
  }
}).listen(4000);

function show(res) {
  var html = `
  <html lang="en">
  
  <head>
    <title>Document</title>
  </head>
  
  <body>
    <h1>Todo List</h1>
    <ul>
      ${items.map(function(item){ return
      `<li> ${item}} </li>`
      }).join('')}
    </ul>
    <form method="post" action="/">
      <p><input type="text" name="item"/></p>
      <p><input type="submit" value="Add Item"/></p>
    </form>
  </body>
  
  </html>`
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', 'text/plain');
  res.end(html);
}

function notFound(res){
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

function badRequest(res) { 
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad Request');
}

function add(req, res){
  var body = '';
  req.setEncoding('utf-8');
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', () => {
    var obj = qs.parse(body);
    items.push(obj.item);
    show(res);
  })
}
