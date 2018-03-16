const  express = require('express');
const  MarvelController = require('../controllers/marvel');
const  Authenticator = require('../middlewares/authenticator');
const router = express.Router();

router.route('/')
  .get(Authenticator.authenticateUser, MarvelController.getComics)

module.exports = router