/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-unresolved: 0 */

const Authenticator = require('../middlewares/authenticator');
const Bookmark = require('../services/dbs/bookmark')

/**
 * Controller for Bookmarks
 */
class BookmarkController {

  /**
   * Method used to create bookmark
   * @param{Object} req - Server req
   * @param{Object} res - Server res
   * @returns{Void} return Void
   */
  static async addBookmark (req, res) {
    try {
      const bookmark = await Bookmark.findOne(JSON.stringify(req.body.comic))
      if(!bookmark){
        console.log(req.body)
        const newBookmark = await Bookmark.add(req.body);
        const bookmarks = await Bookmark.getByUserId(req.body.userId);
        return res.status(201).send({
            success: true,
            bookmarks,
        })
      }
      return res.send({
        success: false,
        message: 'bookmark already exist',
      })
    }
    catch(error){
      return res.status(400).send({
        success: false,
        message: error.message
      });
    }
  }

    /**
   * Method used to get all users Bookmarks
   * @param{Object} req - Server req
   * @param{Object} res - Server res
   * @returns{Void} return Void
   */
  static async getBookmarks (req, res) {
    try {
        const bookmarks = await Bookmark.getByUserId(req.query.userId);
        return res.status(200).send({
          success: true,
          bookmarks,
        })
    }
    catch(error){
      return res.status(400).send({
        success: false,
        message: error.message
      });
    }
  }

 /**
   * Method used to delete user bookmark
   * @param{Object} req - Server req
   * @param{Object} res - Server res
   * @returns{Void} return Void
   */
  static async deleteBookmark (req, res) {
    const user = req.decoded
    try {
        await Bookmark.deleteOne(req.params.id)
        const bookmarks = await Bookmark.getByUserId(user.userId);
        return res.status(202).send({
          success: true,
          bookmarks,
        })
    }
    catch(error){
      return res.status(400).send({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = BookmarkController