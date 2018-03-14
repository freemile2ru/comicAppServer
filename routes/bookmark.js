const express = require('express');
const BookmarkController = require('../controllers/bookmark');
const Authenticator = require('../middlewares/authenticator');
const router = express.Router();


router.route('/')
  .post(Authenticator.authenticateUser, BookmarkController.addBookmark)
  .get(Authenticator.authenticateUser, BookmarkController.getBookmarks)
  
router.route('/:id')
  .delete(Authenticator.authenticateUser, BookmarkController.deleteBookmark)

module.exports = router