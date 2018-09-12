const fs = require('fs');

require('http').createServer(function (req,res) {
  switch (req.url) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
      break;


    case '/css/index.css':
      res.writeHead(200, {'Content-Type': 'text/css'});
      fs.createReadStream(__dirname + '/css/index.css', 'utf-8').pipe(res);
      break;
    default:
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('404 not found');
  }

  console.log(req.url);

}).listen(3000, '127.0.0.1');
