const http = require('http');
http.createServer((req,res)=>{
  res.write("<h1>hello my name is Abhishek</h1>");
  res.end();
  
}).listen(3440);