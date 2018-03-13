const  express = require('express');
const  UserController = require('../controllers/user');
const  Authenticator = require('../middlewares/authenticator');
const router = express.Router();

module.exports = router