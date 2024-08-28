const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if(req.url=='/'){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  }
  else if(req.url=='/about'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is an about page \n');
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 not Found! \n');
  }
});

server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});