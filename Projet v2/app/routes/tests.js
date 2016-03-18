var express = require('express');
var router = express.Router();

var tests = require('../controllers/Tests'); // Nous allons récuperer notre controlleur fait précédement

router.get('/',tests.index);
router.get('/tests2',tests.affich);
router.get('/resultat',tests.results);

module.exports = router;
