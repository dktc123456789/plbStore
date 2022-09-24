var express = require('express');
var router = express.Router();
var controller = require('../controllers/API_users');
const { authentication } = require('../middleware/auth');
const { checkInput } = require('../middleware/user.input');

// sử dụng authentication khi tìm kiếm, sửa, xóa

router.get('/', controller.getUser);
router.get('/:userId',authentication, controller.getUserById);
router.post('/register',checkInput, controller.createUser);
router.post('/checkLogin', controller.checkLogin);
router.post('/update', controller.updateUser);
router.get('/delete/:userId', controller.deleteUserById);

module.exports = router;