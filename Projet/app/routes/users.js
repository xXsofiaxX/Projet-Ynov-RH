var express = require('express');
var router = express.Router();

/* GET users listing. */
var express = require('express');
var router = express.Router();

var users = require('../controllers/Users'); // Nous allons récuperer notre controlleur fait précédement

/* GET Récupère la liste des utilisateurs */
router.get('/', users.index);

/* POST Création d'un nouvel utilisateur */
router.post('/', users.create);


module.exports = router;
