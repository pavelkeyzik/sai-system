const url = require('url'),
  UsersController = require('./controllers/users');

class Router {

  async navigate(path) {
    let urlParsed = url.parse(path, true);
    
    switch(urlParsed.pathname) {
    case '/users':
      return await UsersController.getListOfUsers().then(data => JSON.parse(data));
    default:
      return [];
    }
  }

}

module.exports = new Router();