var modelReview = require('../models/review');

exports.testRevPage = async (req, res, next) => {
    // render về một trang HTML
    res.send('review page');
}

exports.getAll = async (req, res, next) => {
    var listReview = await modelReview.fetchAll();
    // render về một trang HTML
    res.render('qlReview', {REVIEW: listReview});
}

exports.addReview = (req, res, next) => {
    var _review = new Object();
    console.log(_review);
    res.status('addReview' , {
        REVIEW: _review 
    });
}

exports.saveReview = (req, res, next) => {
    // lấy dữ liệu trên form
    let _rev = req.body.review;
    let _avgScr = req.body.avgScore;
    // tạo biến JSON data thêm vào CSDL
    _reviews = {
        review_content: _rev,
        average_score: _avgScr
    }
    modelReview.save(_reviews);
    res.redirect('/rev/qlReview');
}