const lad = require("lodash");
const validator = require("validator");

const { User } = require("../models/API_user");

exports.checkInput = (req, res, next) => {
  let errors = {};
  // lấy dữ liệu từ form
  const email = lad.get(req.body, "email", "");
  const fullname = lad.get(req.body, "fullname", "");
  const phone = lad.get(req.body, "phone", "");
  const age = lad.get(req.body, "age", "");
  const gender = lad.get(req.body, "gender", "");
  const password = lad.get(req.body, "password", "");
  const confirmPassword = lad.get(req.body, "confirmPassword", "");
  const typeUser = lad.get(req.body, "typeUser", "");
  // kiểm tra hợp lệ
  if (validator.isEmpty(email)) {
    errors.email = "Phải nhập Email";
  } else if(!validator.isEmail(email)) {
    errors.email = "Không đúng định dạng Email"
  }

  if (validator.isEmpty(fullname)) {
    errors.fullname = "Phải nhập Fullname";
  }

  if (validator.isEmpty(phone)) {
    errors.phone = "Phải nhập Phone";
  } else if(!validator.isNumeric(phone)) {
    errors.phone = "Phone phải là number, không phải text"
  }

  if (validator.isEmpty(age)) {
    errors.age = "Phải nhập age";
  } else if(!validator.isNumeric(age)) {
    errors.age = "Age phải là number, không phải text"
  }

  if (validator.isEmpty(gender)) {
    errors.gender = "Phải nhập gender";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Phải nhập password";
  } else if (!validator.isLength(password, { min: 8 })) {
    errors.password = "Password tối thiểu là 8 ký tự";
  }

  if (validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = "Phải nhập confirmPassword";
  } else if (!validator.equals(password, confirmPassword)) {
    errors.confirmPassword = "Password phải giống nhau";
  }

  if (validator.isEmpty(typeUser)) {
    errors.typeUser = "Phải nhập typeUser";
  }

  if (lad.isEmpty(errors)) return next();

  return res.status(400).json(errors);
};