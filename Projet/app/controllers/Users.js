require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    sess=require('express-session');

var Users = {
    index: function (req, res) {
        res.render('users/index');
    },
    create: function (req, res) {
        console.log(req.params.email);
        if(req.body.password == req.body.passwordConfirmation){
            console.log('password confirmed');
            var u = new User({
                name: req.body.name,
                firstName: req.body.firstName,
                email: req.body.email,
                password: req.body.password,
                recruiters: req.body.recruiters
            });
            u.save(function (err) {
                if (err) {
                    console.log('error : User inserted');
                }
                else {
                    console.log('user inserted');
                }
            });
            res.render('users/index');
        }
        else{
            res.render('users/index');
            console.log('mauvais mdp');
        }
    },
    connect: function (req,res){
        User.findOne({email:req.body.email},function(err,users){
            if (err) throw err;
            if(users!=null){
                if(users.password==req.body.password){
                    if(users.recruiters=='yes'){
                        res.render('recruiters/panelRecruiter');
                    }
                    else{
                        res.render('users/connected',{title:users.firstName});
                    }
                }
                else{
                    res.render('users/index',{title: 'not connected'});
                }
            }
            else{
                    res.render('users/index',{title: 'not connected'});
                }
        });
    },
};

module.exports = Users;