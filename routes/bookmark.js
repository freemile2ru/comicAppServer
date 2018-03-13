const  express = require('express');
const  UserController = require('../controllers/user');
const  Authenticator = require('../middlewares/authenticator');

const UserController = Controller.user;
const DocumentController = Controller.document;
const router = express.Router();

module.exports = router