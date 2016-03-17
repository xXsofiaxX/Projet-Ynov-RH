require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    sess=require('express-session');

var Users = {
    index: function (req, res) {
        if(sess.logged!=20){
            User.find({}, function (err, users) {
                if (err) throw err;

                // object of all the users
                console.log(users);
            });

            res.render('users/index');
        }
        else {
            res.render('users/connected',{title: sess.name});
        }
    },
    create: function (req, res) {
        if(req.body.password == req.body.passwordConfirmation){
            console.log('password confirmed');
            var u = new User({
                name: req.body.name,
                firstName: req.body.firstName,
                email: req.body.email,
                password: req.body.password
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
    }
};

module.exports = Users;