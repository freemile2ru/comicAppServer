'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bookmark = sequelize.define('Bookmark', {
    userId: DataTypes.INTEGER,
    comic: {
      type: DataTypes.TEXT,
      get: () => { 
        return JSON.parse(this.getDataValue('comic'));
      },
      set: (value) => {
        return this.setDataValue('comic', JSON.stringify(value));
      },
      allowNull: false,
    }
  });

  Bookmark.associate = (models) => {
    Bookmark.belongsTo(models.User, {
      foreignKey: 'UserId'
    });
  }
  return Bookmark;
};