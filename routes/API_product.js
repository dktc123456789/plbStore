var express = require('express');
var router = express.Router();
var controller = require('../controllers/API_products');

router.get('/', controller.getProduct);
router.get('/:id', controller.getProductById);
router.post('/add', controller.createProduct);
router.post('/update/:id', controller.updateProduct);
router.get('/delete/:id', controller.deleteProduct);

module.exports = router;