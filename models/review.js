var db = require('./database');

let reviews = [];
module.exports = class Review {
    constructor() {

    }

    // trả về tất cả sản phẩm có trong Database
    static fetchAll() {
        let sql = `SELECT * FROM reviews`;
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

    // thêm một bình luận
    static save(rev) {
        let sql = `INSERT INTO reviews SET ?`;
        db.query(sql, rev, function (err, data) {
            if (err) throw err;
            return true;
        })
    }
}