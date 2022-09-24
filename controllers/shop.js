var modelCatalog = require('../models/catalog');
var modelProduct = require('../models/product');
var db = require('../models/database');

exports.getShop = async (req, res, next) => {
    // var listCatalog = await  modelCatalog.fetchAll();
    // render về một trang HTML
    res.send('This is shop page');
}

// trang chủ - user
exports.shopHome = async (req, res, next) => {
    var listCatalog = await modelCatalog.fetchAll();
    var listProduct = await modelProduct.fetchAll();
    res.render('shop', {listCate: listCatalog, listPro: listProduct});
}

// trang chi tiết sản phẩm
exports.shopdtPro = async (req, res, next) => {
    let id = req.params.id;
    let sql = `SELECT * FROM products WHERE id = ${id}; SELECT * FROM catalog`;
    db.query(sql, function (err, data) {
        if (err) throw err;
        res.render('dtPro', {listCate: data[1], listProduct: data[0]});
    });
}

// sản phẩm theo danh mục
exports.proCatalogMenu = async (req, res, next) => {
    let cateId = req.params.cateId; // lấy giá trị tham số
    let sql = `SELECT * FROM products WHERE idCate = ${cateId}; SELECT * FROM catalog`;
    db.query(sql, function (err, data) {
        if (err) throw err;
        res.render('catalog', {listCate: data[1], listProduct: data[0]});
    });
}