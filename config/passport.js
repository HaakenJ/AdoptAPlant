let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let db = require('../models');

// Use local strategy for authentication
passport.use('local', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, cb) {
        db.Account.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser) {
            if (!dbUser && !dbUser.validPassword(password)) {
                return cb(null, false, {
                    message: 'Incorrect email or password'
                });
            }
            return cb(null, dbUser);
        });
    }
));

passport.serializeUser(function(user, cb){
    cb(null, user);
});

passport.deserializeUser(function(user, cb){
    cb(null, false);
});

module.exports = passport;