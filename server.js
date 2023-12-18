// Import http server
const http = require('http');
// Createing server
const server = http.createServer((req,res)=>{
  console.log(req.url);
  res.write('Welcome to my web page');
  if(req.url=="/product"){
    // response end
    return res.end('This is Product page')
  }else if(req.url=='/user'){
    res.end('This is user Page');
  }
  // here comes request
  res.end('Welcome to Node JS server')
})
// specify a port to listen the client
server.listen(3100,()=>{
  console.log('Server is listening the port 3100')
});