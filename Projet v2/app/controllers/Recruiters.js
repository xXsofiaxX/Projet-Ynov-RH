require('../models/User');
require('../models/Test');
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Test = mongoose.model('Test');

var Recruiters = {
    index: function (req,res) {
        User.find({},function(err,users){
            res.json(users);
        });
    },
    affich: function (req,res){
        Test.find({score:{$gt:-60}},function (err,tests){
            console.log(tests.User.name);
        });
        res.render('recruiters/resultat',{style:'//'});
    }
};


module.exports = Recruiters;