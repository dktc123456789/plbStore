var db = require('./database');

let catalog = [];
module.exports = class Catalog {
    constructor() {

    }

    // trả về tất cả danh mục có trong Database
    static fetchAll() {
        let sql = `SELECT * FROM catalog`;
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

    // static cateId(cateId) {
    //     let sql = `SELECT * FROM products WHERE id = ${cateId}; SELECT * FROM catalog`;
    //     db.query(sql, function (err, data) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             resolve(data[0]);
    //         }
    //      })
    // }
}