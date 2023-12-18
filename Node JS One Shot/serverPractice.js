// In server.js (or your main script)
const http = require('http');
const data = require('./data.js');


http.createServer((req, res) => {
  res.writeHead(201, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(data));
  res.end();
}).listen(3000);

console.log('Hello, our server is working');
