var controllersUsers = require('../controllers/users');

var express = require('express');

var router = express.Router();

router.get('/', controllersUsers.testUser);
router.get('/qlUser', controllersUsers.getAllUser);
router.get('/register', controllersUsers.addUser);
router.post('/register', controllersUsers.saveUser);
router.get('/login', controllersUsers.loginUser);
router.post('/checkLogin', controllersUsers.checklogin);
router.get('/editUser/:id', controllersUsers.editUser);
router.post('/update', controllersUsers.updateUser);
router.get('/delete/:id', controllersUsers.deleteUser);
module.exports = router;