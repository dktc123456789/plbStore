var db = require('./database');

let products = [];
module.exports = class product {
    constructor() {

    }

    // trả về tất cả sản phẩm có trong Database
    static fetchAll() {
        let sql = `SELECT * FROM products`;
        return new Promise((resolve, reject) => {
            db.query(sql, function (err, data) {
               if (err) {
                   throw err;
               } else {
                   resolve(data);
               }
            })
        })
    }

    // thêm một sản phẩm
    static save(pro) {
        let sql = `INSERT INTO products SET ?`;
        db.query(sql, pro, function (err, data) {
            if (err) throw err;
            return true;
        })
    }

    // chỉnh sửa và cập nhật sản phẩm
    static edit(id) {
        let sql = `SELECT * FROM products WHERE id = ${id}`;
        return new Promise((resolve, reject) => {
            db.query(sql, function (err, data) {
                if (err) {
                    throw err;
                } else {
                    resolve(data[0]);
                }
            })
        })
    }

    static update(pro) {
        let sql = `UPDATE products SET ? WHERE id = ${pro.id}`;
        db.query(sql, pro, function (err, data) {
            if (err) throw err;
            return true;
        })
    }

    // xóa sản phẩm
    static delete(id) {
        let sql = `DELETE FROM products WHERE id = ${id}`;
        db.query(sql, function (err, data) {
            if (err) throw err;
        })
    }
}