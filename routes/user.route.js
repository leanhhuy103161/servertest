var express = require('express');
var router = express.Router();
var validate = require('../validate/user.validate')
var controller = require('../controllers/user.controller')

// var authMiddleware = require('../middlewares/auth.middleware')

router.get('/', controller.getIndex);

router.post('/create', validate.getCreate, controller.postCreate)

router.get('/create', controller.getCreate);

router.get('/search', controller.getSearch);

router.get('/:id', controller.getId);

module.exports = router;