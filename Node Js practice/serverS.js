

const http = require('http');
const server = http.createServer((req,res)=>{
  res.write('Jai shri Ram: Welcome to server');
  res.end();
})
server.listen(3130,()=>{
  console.log('Server is listening to port 3130');
})