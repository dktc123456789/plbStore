var userModel = require('../models/user');
const modelUser = require("../models/API_user");
const bcrypt = require("bcryptjs");
const db = require('../models/database');

exports.testUser = async (req, res, next) => {
  // render về một trang HTML
  res.send("user page"); // test page
};

// trả về tất cả user có trong Database
exports.getAllUser = async (req, res, next) => {
  var listUser = await userModel.fetchAll();
  // render về một trang HTML
  res.render("qlUser", { USER: listUser });
};

// render trang register
exports.addUser = (req, res, next) => {
  res.render("register");
};

// thêm mới user
exports.saveUser = (req, res, next) => {
  // lấy dữ liệu trên form
  const email = req.body.email;
  const fullname = req.body.fullname;
  const phone = req.body.phone;
  const age = req.body.age;
  const gender = req.body.gender;
  const password = req.body.password;
  const typeUser = req.body.typeUser;
  // mã hóa password
  var salt = bcrypt.genSaltSync(12);
  var hashedPassword = bcrypt.hashSync(password, salt);
  // tạo biến JSON thêm vào Database
  let _users = {
        email: email,
        fullname: fullname,
        phone: phone,
        age: age,
        gender: gender,
        password: hashedPassword,
        typeUser: typeUser,
  }
  userModel.save(_users);
  res.redirect('/user/qlUser');
};

exports.editUser = async (req, res, next) => {
    // lấy id trong routes
    var _id = req.params.id;
    let _users = await userModel.edit(_id);
    console.log(_users);
    res.render('editUser', {USER: _users, PATH: '/user/update'});
}

exports.updateUser = (req, res, next) => { 
   // lấy dữ liệu trên form
   const email = req.body.email;
   const fullname = req.body.fullname;
   const phone = req.body.phone;
   const age = req.body.age;
   const gender = req.body.gender;
   const password = req.body.password;
   const typeUser = req.body.typeUser;
   var salt = bcrypt.genSaltSync(12);
   var hashedPassword = bcrypt.hashSync(password, salt);
   let users = {
         email: email,
         fullname: fullname,
         phone: phone,
         age: age,
         gender: gender,
         password: hashedPassword,
         typeUser: typeUser,
   }
   console.log(users);
   userModel.update(users);
   res.redirect('/user/qlUser');
}

exports.deleteUser = async (req, res, next) => {
  // lấy dữ liệu trên form
  var _id = req.params.id;
  let _users = await userModel.delete(_id);
  res.redirect('/user/qlUser');
}

exports.loginUser = (req, res, next) => {
  res.render('login');
}

exports.checklogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
}