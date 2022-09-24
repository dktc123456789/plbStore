const productModel = require("../models/API_products");
const Product = require("../models/API_products");

// trả về tất cả sản phẩm hiện có trong Database
exports.getProduct = (req, res, next) => {
  productModel
    .findAll()
    .then((listProduct) => {
      res.status(200).json({
        message: "Danh sách sản phẩm",
        listProduct: listProduct,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// trả về sản phẩm có id cụ thể
exports.getProductById = (req, res, next) => {
  const id = req.params.id;
  productModel
    .findByPk(id)
    .then((pro) => {
      if (!pro) {
        res.status(201).json({
          status: false,
          message: "Không tìm thấy thông tin sản phẩm",
        });
      }
      res.status(200).json({
        message: "Đã tìm thấy thông tin sản phẩm",
        pro: pro,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// thêm sản phẩm
exports.createProduct = (req, res, next) => {
  const title = req.body.title;
  const images = req.body.images;
  const description = req.body.description;
  const price = req.body.price;
  const year = req.body.year;
  const author = req.body.author;
  const isbn = req.body.isbn;
  const idCate = req.body.idCate;
  const content = req.body.content;
  const prod = new productModel({
    title: title,
    images: images,
    description: description,
    price: price,
    year: year,
    author: author,
    isbn: isbn,
    idCate: idCate,
    content: content,
  });
  prod
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Thêm thành công sản phẩm mới!",
        product: prod,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// cập nhật sản phẩm
exports.updateProduct = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const images = req.body.images;
  const description = req.body.description;
  const price = req.body.price;
  const year = req.body.year;
  const author = req.body.author;
  const isbn = req.body.isbn;
  const idCate = req.body.idCate;
  const content = req.body.content;
  const prod = new Object({
    title: title,
    images: images,
    description: description,
    price: price,
    year: year,
    author: author,
    isbn: isbn,
    idCate: idCate,
    content: content,
  });
  productModel
    .findByPk(id)
    .then((pro) => {
      if (!pro) {
        res.status(201).json({
          status: false,
          message: "Không tìm thấy id để cập nhật",
        });
      } else {
        productModel
          .findOne(prod, {
            where: prod.id,
          })
          .then((result) => {
            res.status(201).json({
              status: true,
              message: "Cập nhật thông tin sản phẩm thành công",
              pro: prod,
            });
          });
      }
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// xóa theo id
exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  productModel
    .findByPk(id)
    .then((pro) => {
      // nếu không tồn tại thì thông báo lỗi
      if (!pro) {
        res.status(201).json({
          status: false,
          message: "Không tìm thấy id để xóa",
        });
      }
      // ngược lại thì tiến hành xóa theo id
      else {
        productModel
          .destroy({
            where: { id: id },
          })

          // nếu xóa thành công thì in ra kết quả
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Đã xóa Sản phẩm",
            });
          });
      }
    })
    // nếu xóa bị lỗi thì hiển thị thông báo lỗi
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};