const { Sequelize, DataTypes } = require("sequelize");
const db = require("./database_Sequelize");

const User = db.define("Users", {
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  gender: {
    type: DataTypes.BOOLEAN,
  },
  password: {
    type: DataTypes.STRING,
  },
  typeUser: {
    type: DataTypes.BOOLEAN,
  },
});
db.sync(); // tạo table user
module.exports = User;