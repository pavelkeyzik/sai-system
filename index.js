const http = require('http');
const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.end(`I'm still working... Are you happy?`);
});

server.listen(PORT, () => {
  console.log(`Server runned on port ${PORT}...`);
});