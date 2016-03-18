var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

var users = require('../controllers/Users'); // Nous allons récuperer notre controlleur fait précédement

router.get('/', users.index);

router.post('/signUp', users.create);

router.post('/',users.connect);

router.post('/users/connected',users.score);


module.exports = router;
