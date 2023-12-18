const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("portfolio.html").toString();
  res.end(data);
});

server.listen(3300, () => {
  console.log("Server is listening on port 3300");
});
