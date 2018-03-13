'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bookmark = sequelize.define('Bookmark', {
    userId: DataTypes.INTEGER,
    comic: {
      type: DataTypes.TEXT,
      get: function(){ 
        return JSON.parse(this.getDataValue('comic'));
      },
      set: function(value){
        return this.setDataValue('comic', JSON.stringify(value));
      },
      allowNull: false,
      unique: true
    }
  });

  Bookmark.associate = (models) => {
    Bookmark.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  }
  return Bookmark;
};