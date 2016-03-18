require('../models/User');
require('../models/Test');
var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    test: Test
});


exports.model = mongoose.model('Recruiter', schema, 'recruiter');