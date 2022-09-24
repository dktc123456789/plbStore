var mysql = require('mysql');

// tạo kết nối CSDL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books',
    multipleStatements: true
});

// trả về kết nối CSDL
db.connect(function (err) {
    // nếu lỗi thì hiển thị thông báo lỗi
    if (err) throw err;
    // nếu thành công thì in ra thông báo thành công
    console.log('Database is connected successfully !');
});

// muốn sử dụng được thì exports ra
module.exports = db;