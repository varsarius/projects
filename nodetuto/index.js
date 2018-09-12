const http = require('http');
const fs = require('fs');
var server = http.createServer(function(req, res) {
  console.log('URL Страницы: ' + req.url);


  if (req.url == '/' || req.url == '/index'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
  }
  else if (req.url == '/february30'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/february30.html', 'utf-8').pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html', 'utf-8').pipe(res);
  }

  res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
  fs.createReadStream(__dirname + '/css/index.css', 'utf-8').pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('Мы лтслеживаем порт 3000.');
