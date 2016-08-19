'use strict';
module.exports = function(sequelize, DataTypes) {
  //Define the Author model
  var Contact = sequelize.define('Contact', {
    //Define the data types of the Author fields
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT,
    city_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contact;
};