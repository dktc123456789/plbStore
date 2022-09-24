const revModel = require("../models/API_review");
const Review = require("../models/API_review");

// trả về tất cả review hiện có trong Database
exports.getReview = (req, res, next) => {
  revModel
    .findAll()
    .then((listRev) => {
      res.status(200).json({
        message: "Danh sách review",
        listRev: listRev,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};