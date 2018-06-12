const fs = require('fs');

class UsersController {

  async getListOfUsers () {
    if(process.env.NODE_ENV == 'dev') {
      return await fs.readFileSync(`${__dirname}/../data/list-of-users.json`, (err, data) => {
        if(err) {
          throw new Error(err);
        }
        return data;
      });
    }
    return await this._getUsers();
  }

  _getUsers() {
    let users = [];
    // Create request to DataBase for getting list of users
    return users;
  }
}

module.exports = new UsersController();