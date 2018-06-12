const http = require('http');
const PORT = process.env.PORT || 8080

if(process.env.NODE_ENV !== 'prod') {
  require('dotenv').load();
}

const server = http.createServer((req, res) => {
  res.end(`I'm still working... Are you happy?`);
});

server.listen(PORT, () => {
  console.log(`Server runned on port ${PORT}...`);
});