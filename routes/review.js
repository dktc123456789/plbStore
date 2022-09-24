var controllersRev = require('../controllers/review');

var express = require('express');

var router = express.Router();

router.get('/', controllersRev.testRevPage);
router.get('/qlReview', controllersRev.getAll);
router.get('/addReview', controllersRev.addReview);
router.post('/addReview', controllersRev.saveReview);
module.exports = router;