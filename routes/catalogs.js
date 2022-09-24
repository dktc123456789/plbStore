var controllersCatalog = require('../controllers/catalog');
var express = require('express');

var router = express.Router();

router.get('/', controllersCatalog.getCatalog);
router.get('/addnew', controllersCatalog.addNew);

// muốn dùng được thì phải exports ra, không exports thì không sử dụng được
module.exports = router;