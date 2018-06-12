const http = require('http');

const PORT = process.env.PORT || 8080;
const Router = require('./routers');

if(process.env.NODE_ENV !== 'prod') {
  require('dotenv').load();
}

const server = http.createServer((req, res) => {
  switch(req.method) {
  case 'GET':
    Router.navigate(req.url).then(response => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(response));
    });
    break;
  default:
    throw new Error('Method not found...');
  }
});

server.listen(PORT, () => {
  console.log(`Server runned on port ${PORT}...`);
});