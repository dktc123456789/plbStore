var db = require("./database");
var sequelizeDB = require("./database_Sequelize");
var User = require("../models/API_user");

let users = [];
module.exports = class user {
  constructor() {}

  // trả về tất cả user có trong Database
  static fetchAll() {
    let sql = `SELECT * FROM users`;
    return new Promise((resolve, reject) => {
      db.query(sql, function (err, data) {
        if (err) {
          throw err;
        } else {
          resolve(data);
        }
      });
    });
  }

  // thêm một user
  static save(user) {
    let sql = `INSERT INTO users SET ?`;
    db.query(sql, user, function (err, data) {
      if (err) throw err;
      return true;
    });
  }

  //  chỉnh sửa và cập nhật user
  static edit(_id) {
    return new Promise((resolve, reject) => {
      const _user = User.findOne({ where: { email: _id } });
      if (_user === null) {
        console.log("Không tìm thấy email");
      } else {
        resolve(_user);
      }
    });
  }

  static update(user) {
    return new Promise((resolve, reject) => {
      User.update(user, {
        where: {
          email: user.email,
        },
      });
      if (user === null) {
        console.log("Không tìm thấy email");
      } else {
        resolve(user);
      }
    });
  }

  // xóa user
  static delete(_id) {
    return new Promise((resolve, reject) => {
      const _user = User.destroy({ where: { email: _id } });
      if (_user === null) {
        console.log("Không tìm thấy email");
      } else {
        resolve(_user);
      }
    });
  }
};