var controllersProducts = require('../controllers/products');

var express = require('express');

var router = express.Router();

var multer = require('multer');

// multer và set storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, 'public/images');
        }
        else {
            cb(new Error('not image'), false);
        }
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + file.originalname;
        cb(null, filename);
    }
});

var upload = multer({storage: storage});

router.get('/', controllersProducts.getProduct);
router.get('/products', controllersProducts.dtProduct);
router.get('/addPro', controllersProducts.addProduct);
router.post('/addPro', upload.single('images'), controllersProducts.saveProduct);
router.get('/editPro/:id', controllersProducts.editProduct);
router.post('/update', upload.single('images'), controllersProducts.updateProduct);
router.get('/delPro/:id', controllersProducts.deleteProduct);
module.exports = router;