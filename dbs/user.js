const DB = require ('../models');
const User =  DB.User;

module.exports = {
	create: (userData) => User.create(userData),
  getUser: (userDetail) => User.findOne({
    where: {
      $or:
        [
          {  email: userDetail },
          {   username: userDetail },
          { UserId, }
        ]
    }
	}),
	update: async (id, data) => {
		const user = await User.findById(id);
		return user.update(data, {fields: Object.keys(data)})
	},
};