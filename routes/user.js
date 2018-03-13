const  express = require('express');
const  UserController = require('../controllers/user');
const  Authenticator = require('../middlewares/authenticator');

const UserController = Controller.user;
const DocumentController = Controller.document;
const router = express.Router();

router.route('/login')
  .post(UserController.loginUser)

router.route('/signup')
  .post(UserController.createUser)

module.exports = router