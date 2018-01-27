var http = require('http');   //http服务和客户端功能
var fs = require('fs');       //文件系统
var path = require('path');   //文件系统路径
var mime = require('mime');   //文件扩展名得出MIME类型

let cache = {};               //缓存文件内容

//发送文件数据及错误响应
function send404(res){
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('Error 404: resource not found');
  res.end();
}

//提供文件数据服务
function sendFile(res, filePath, fileContents){
  //path.basename('/foo/bar/baz/asdf/quux.html');
  // 返回: 'quux.html'
  res.writeHead(200, { 'Content-Type': mime.lookup(path.basenman(filePath))});
  res.end(fileContents);
}

//数据缓存到内存里
function serverStatic(res, cache, absPath) {
  if(cache[absPath]) {
    sendFile(res, absPath, cache[absPath]);
  } else {
    //exists被弃用
    fs.stat(absPath, (exists) => {
      if(exists){
        fs.readFile(absPath, (err, data) => {
          if(err){
            send404(res);
          } else {
            cache[absPath] = data;
            sendFile(res, filePath, data);
          }
        });
      } else {
        send404(res);
      }
    });
  }
}

const server = http.createServer( (request, response) => {
  let filePath = false;

  if(request.url == '/') {
    filePath = 'public/index.html';
  } else {
    filePath = 'public' + request.url;
  }

  const absPath = './' + filePath;
  serverStatic(response, cache, absPath);
});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});