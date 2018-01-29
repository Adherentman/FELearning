var connect = require('connect');

function logger(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
}

function hello(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}

function admin(req, res){
  res.end('admin');
}

var app = connect()
  .use(logger)
  .use('/admin', admin) //只有url中匹配了第一个字符串，才会去调用admin
  .use(hello)
  .listen(3000);