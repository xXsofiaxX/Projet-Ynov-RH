var express = require('express');
var router = express.Router();

var tests = require('../controllers/Tests'); // Nous allons récuperer notre controlleur fait précédement

router.post('/', tests.verif);
router.get('/',tests.affich);
router.post('/test3',tests.affich);
router.get('/resultat',tests.results);

module.exports = router;
