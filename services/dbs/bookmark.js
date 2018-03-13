const DB = require ('../../models');
const Bookmark =  DB.Bookmark;

module.exports = {
	add: (data) => Bookmark.create(data),
  getByUserId: (userId) => Bookmark.findAll({
    where: {
      userId,
    }
	}),
	deleteOne: async (id) => {
		const bookmark = await Bookmark.findById(id);
		return bookmark.destroy()
	},
	findOne: (comic) => Bookmark.findOne({
		where: {
			comic
		}
	}) 
};