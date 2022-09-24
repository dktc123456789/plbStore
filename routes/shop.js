var express = require('express');
var router = express.Router();
var controllersShop = require('../controllers/shop');
/* GET home page. */
router.get('/test', controllersShop.getShop);
router.get('/', controllersShop.shopHome);
router.get('/products/:id', controllersShop.shopdtPro);
router.get('/catalog/:cateId', controllersShop.proCatalogMenu);

module.exports = router;