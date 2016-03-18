var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    name: String,
    firstName: String,
    email: String,
    password : String,
    recruiters: String,
});

exports.model = mongoose.model('User', schema, 'users');