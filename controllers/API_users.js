const userModel = require("../models/API_user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/API_user");

// trả về tất cả user có trong Database
exports.getUser = (req, res, next) => {
  userModel
    .findAll()
    .then((listUser) => {
      res.status(200).json({
        message: "Danh sách user",
        listUser: listUser,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// tìm kiếm user theo id
exports.getUserById = (req, res, next) => {
  const userId = req.params.userId; // userId lấy từ routes
  userModel
    .findByPk(userId)
    .then((user) => {
      // console.log(user); // tìm thấy thì in ra - test
      // nếu không tìm thấy user
      if (!user) {
        res.status(201).json({
          status: false,
          message: "Không tìm thấy thông tin user",
        });
      }
      // nếu tìm thấy user
      else {
        res.status(201).json({
          status: true,
          message: "Đã tìm thấy thông tin user",
          user: user,
        });
      }
    })
    // sử dụng catch() để bắt lỗi nếu có lỗi xảy ra
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// thêm user vào Database
exports.createUser = (req, res, next) => {
  // lấy thông tin trên form
  const _email = req.body.email;
  const _fullname = req.body.fullname;
  const _phone = req.body.phone;
  const _age = req.body.age;
  const _gender = req.body.gender;
  const _password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const _typeUser = req.body.typeUser;
  userModel
    .findOne({ where: { email: _email } })
    .then((user) => {
      // nếu tồn tại user trong Database
      if (user) {
        res.status(400).json({
          status: false,
          message: "Email đã tồn tại",
        });
      }
      // nếu không tồn tại thì mã hóa password
      return bcrypt.hash(_password, 12);
    })
    .then((hashedPassword) => {
      const _user = new userModel({
        email: _email,
        fullname: _fullname,
        phone: _phone,
        age: _age,
        gender: _gender,
        password: hashedPassword,
        typeUser: _typeUser,
      });
      return _user.save(); // lưu lại thông tin như email, phone, etc
    })
    .then((user) => {
      res.status(201).json({
        status: true,
        message: "Thêm thành công user",
        user: user,
      });
    })
    // nếu có lỗi thì hiển thị thông báo lỗi
    .catch((err) => {
      res.status(404).json(err);
    });
};

// cập nhật user
exports.updateUser = (req, res, next) => {
  const email = req.body.email;
  const fullname = req.body.fullname;
  const phone = req.body.phone;
  const age = req.body.age;
  const gender = req.body.gender;
  const password = req.body.password;
  const typeUser = req.body.typeUser;
  userModel
    .findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        res.status(400).json({
          status: false,
          message: "Email không tồn tại, không thể cập nhật",
        });
      }
      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const user = new Object({
        email: email,
        fullname: fullname,
        phone: phone,
        age: age,
        gender: gender,
        password: hashedPassword,
        typeUser: typeUser,
      });
      return userModel.update(user, { where: { email: user.email } });
    })
    .then((num) => {
      if (num == 1) {
        console.log(num); // in num ra để không bị dính trên server
        res.status(201).json({
          status: true,
          message: "Cập nhật user thành công!",
          user: num,
        });
      } else {
        res.status(201).json({
          status: false,
          message: "Cập nhật user có lỗi xảy ra!",
          user: num,
        });
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
// xóa user
exports.deleteUserById = (req, res, next) => {
  const userId = req.params.userId; // userId lấy từ routes
  userModel
    .findByPk(userId)
    .then((user) => {
      // nếu không tìm thấy
      if (!user) {
        res.status(201).json({
          status: false,
          message: "Không tìm thấy id để xóa",
        });
      }
      // nếu tìm thấy
      else {
        userModel
          .destroy({
            where: { email: userId },
          })
          .then((result) => {
            res.status(201).json({
              status: true,
              message: "Đã xóa user",
            });
          });
      }
    })
    // sử dụng catch() để bắt lỗi nếu có lỗi xảy ra
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// kiểm tra login
exports.checkLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  userModel
    .findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        return res.status(200).json({
          status: false,
          message: "Email không tồn tại",
        });
      }
      // so sánh password lấy từ form và password trong users
      return Promise.all([bcrypt.compare(password, user.password), user]);
    })
    .then((result) => {
      const isMarch = result[0];
      const user = result[1];

      // check password có đúng hay không
      if (!isMarch) {
        return res.status(200).json({
          status: false,
          message: "Password không đúng",
        });
      }
      const payload = {
        email: email,
        typeUser: user.typeUser,
      };
      return jwt.sign(payload, "FPT Polytechnic", { expiresIn: 3600 });
    })
    .then((token) => {
      console.log(token);
      res.status(200).json({
        status: true,
        message: "Đăng nhập thành công",
        token,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};