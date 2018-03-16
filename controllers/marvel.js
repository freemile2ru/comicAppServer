/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-unresolved: 0 */

const Authenticator = require('../middlewares/authenticator');
const Marvel = require('../services/marvel')

/**
 * Controller for Marvels
 */
class MarvelController {
 static async getComics(req, res){
     try {
      const comics = await Marvel.getComics(req.query.page);
      return res.status(200).send({
        success: true,
        comics,
      })
     }
     catch(error){
      return res.send({
        success: false,
        message: error
      });
    }
  }
}

module.exports = MarvelController