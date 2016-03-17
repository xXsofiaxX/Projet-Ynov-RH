require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User');

var Recruiters = {
    index: function (req,res) {
        User.find({email: 'a'}, function (err, users) {
            if (err) throw err;
            // object of all the users
            res.json(users);
        });
    }
};

module.exports = Recruiters;