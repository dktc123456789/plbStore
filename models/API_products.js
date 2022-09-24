const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database_Sequelize');

const Product = db.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    year: {
      type: DataTypes.DOUBLE,
    },
    author: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    idCate: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

db.sync(); // tạo bảng table Product
module.exports = Product;