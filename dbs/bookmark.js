const DB = require ('../models');
const Bookmark =  DB.Bookmark;

module.exports = {
	create: (data) => Bookmark.create(data),
  getUserBookmarks: (userId) => Bookmark.findAll({
    where: {
      userId,
    }
	}),
	delete: async (id) => {
		const bookmark = await Bookmark.findById(id);
		return bookmark.destroy()
	},
};