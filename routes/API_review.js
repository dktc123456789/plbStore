var express = require('express');
var router = express.Router();
var controller = require('../controllers/API_review');

router.get('/', controller.getReview);

module.exports = router;