require('../models/User');
require('../models/Test');

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    sess=require('express-session');

var Tests = {
    index:function(req,res){
        res.render('tests/test1');
    },
    affich: function(req,res){
        res.render('tests/test2');
    },
    results:function(req,res){
        res.render('users/connected');
    }
}

module.exports = Tests;