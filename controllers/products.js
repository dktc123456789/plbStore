var modelProduct = require('../models/product');
var modelCatalog = require('../models/catalog');
const product = require('../models/product');

exports.getProduct = async (req, res, next) => {
    var listProduct = await modelProduct.fetchAll();
    // render về một trang HTML
    res.render('admin', {listPro: listProduct});
}

exports.dtProduct = async (req, res, next) => {
    var listProduct = await modelProduct.fetchAll();
    // render về một trang HTML
    res.render('products', {listPro: listProduct});
}

exports.addProduct = (req, res, next) => {
    // res.render('addPro');
    var _products = new Object();
    console.log(_products);
    res.render('addPro', {
        PRODUCT: _products,
        PATH: '/admin/addPro' 
    });
}

exports.saveProduct = (req, res, next) => {
    // lấy dữ liệu trên form
    const file = req.file;
    let title = req.body.title;
    let img = file.filename;
    let descN = req.body.description;
    let price = req.body.price;
    let year = req.body.year;
    let author = req.body.author;
    let isbn = req.body.isbn;
    let idCate = req.body.idCate;
    // tạo biến JSON data thêm vào CSDL
    products = {
        title: title,
        images: img,
        description: descN,
        price: price,
        year: year,
        author: author,
        isbn: isbn,
        idCate: idCate
    }
    modelProduct.save(products);
    // thêm xong thì quay lại trang sản phẩm
    res.redirect('/shop');
}

exports.editProduct = async (req, res, next) => {
    // lấy dữ liệu trên form
    var id = req.params.id;
    let _products = await modelProduct.edit(id);
    console.log(_products);
    res.render('editPro', {PRODUCT: _products, PATH: '/admin/update'});
}

exports.updateProduct = (req, res, next) => {
    // lấy dữ liệu trên form
    const file = req.file;
    let _id = req.body.id;
    let _title = req.body.title;
    let _img = file.filename;
    let _descN = req.body.description;
    let _price = req.body.price;
    let _year = req.body.year;
    let _author = req.body.author;
    let _isbn = req.body.isbn;
    let _idCate = req.body.idCate;
    // tạo biến JSON data thêm vào CSDL
    products = {
        id: _id,
        title: _title,
        images: _img,
        description: _descN,
        price: _price,
        year: _year,
        author: _author,
        isbn: _isbn,
        idCate: _idCate
    };
    modelProduct.update(products);
    // Cập nhật thì quay lại trang sản phẩm
    res.redirect('/admin/products');
}

exports.deleteProduct = async (req, res, next) => {
    // lấy dữ liệu trên form
    var id = req.params.id;
    let _products = await modelProduct.delete(id);
    res.redirect('/admin/products');
}

exports.listPro = (req, res, next) => {
    modelProduct.fetchAll();
    res.render('/shop', {listPro: listProduct});
}

// exports.detailPro = async (req, res, next) => {
//     var id = req.params.id;
//     let _product = await modelProduct.findById(id);
//     console.log(_product);
//     res.render('dtPro', {product: _product, PATH: '/shop/products'});
// }