var express = require('express');
var router = express.Router();

var recruiters = require('../controllers/Recruiters'); // Nous allons récuperer notre controlleur fait précédement

/* GET Récupère la liste des utilisateurs */
router.get('/', recruiters.index);
router.get('/resultat',recruiters.affich);

module.exports = router;