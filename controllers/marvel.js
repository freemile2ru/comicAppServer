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
      const comics = await Marvel.getComics();
      return res.status(201).send({
        success: true,
        comics,
      })
     }
     catch(error){
      return res.status(400).send({
        success: false,
        message: error
      });
    }
  }
}

module.exports = MarvelController