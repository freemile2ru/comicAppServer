const path = require('path');
const bookmarksRoute = require('./bookmark');
const UsersRoute = require('./user');


/**
 * IndexRoute contains all the routes for the api
 */
class IndexRoute {
/**
 * Index IndexRoute for catch all
 * @param{Object} app express app
 * @return{Void} return void
 */
  static Index(app) {
    app.all('*', (req, res) => {
      res.status(200)
        .send('welcome to comic app api');
    });
  }

/**
 * Users Route
 * @param{Object} app express app
 * @return{Void} return void
 */
  static Users(app) {
    app.use('/api/users', UsersRoute);
  }

/**
 * Bookmarks Route
 * @param{Object} app express app
 * @return{Void} return void
 */
  static Bookmarks(app) {
    app.use('/api/documents', BookmarksRoute);
  }

}
module.exports = IndexRoute;