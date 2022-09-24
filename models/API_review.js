const { Sequelize, DataTypes } = require("sequelize");
const db = require("./database_Sequelize");

const Review = db.define(
  "Reviews",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    review_count: {
      type: DataTypes.INTEGER,
    },
    average_score: {
      type: DataTypes.DOUBLE,
    },
    review_content: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
db.sync(); // tạo table review
module.exports = Review;
