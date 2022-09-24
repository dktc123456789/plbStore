const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('books', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

db.authenticate()
    .then(() => {
        console.log('Kết nối đến Database thành công !');
    });
module.exports = db;