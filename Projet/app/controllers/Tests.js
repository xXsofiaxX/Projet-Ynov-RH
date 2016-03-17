require('../models/User');
require('../models/Test');

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    sess=require('express-session');

var Tests = {
    verif: function(req,res) {
        User.findOne({email: req.body.email }, function (err,users){
            if(err) {
                throw err;
            }
            if(users!=null){
                if(users.password ==req.body.password)
                {
                    sess=req.session;
                    sess.logged=20;
                    sess.test = 0;
                    sess.score=users.score;
                    sess.name=users.name;
                    res.render('tests/test1');
                }
                else
                {
                    res.render('tests/index',{title: "You need to be logged"});
                }
            } 
        });
    },
    affich: function(req,res){
        if(sess.logged==20 && sess.test==0)
        {
            res.render('tests/test2');
            sess.test=sess.test+1;
        }
        if(sess.logged==20 && sess.test==1)
        {
            res.render('tests/test3');
        }
        else
        {
            res.render('users/index',{title: "You need to be logged"});
        }
    },
    results:function(req,res){
        sess.score=sess.score+req.params.score;
        res.render('tests/resultat',{result: sess.score});
    }
}

module.exports = Tests;