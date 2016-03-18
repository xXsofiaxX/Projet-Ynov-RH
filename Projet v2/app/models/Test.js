require('../models/User');
var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    User : User,
    Score : Number
});


exports.model = mongoose.model('Test', schema, 'test');