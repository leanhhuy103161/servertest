var express = require('express');
var router = express.Router();
// var validate = require('../validate/auth.validate')
// var db = require('../db');
var controller = require('../controllers/auth.controller')

router.get('/login', controller.login);
router.post('/login', controller.postLogin)

module.exports = router;