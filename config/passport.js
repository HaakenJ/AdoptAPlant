let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let db = require('../models');

// Use local strategy for authentication
passport.use('local', new LocalStrategy(
    function (username, password, done) {
        db.User.findOne({ username: username })
            .then(function (dbUser) {
                if (!dbUser && !dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: 'Incorrect email or password'
                    });
                }
                return done(null, dbUser);
            }).catch(function(err) {
                return done(err);
            });
    }
));

passport.serializeUser(function (user, done) {
    done(null, { _id: user._id });
});

passport.deserializeUser(function (id, done) {
    db.User.findOne({_id: id})
        .then(function() {
            done(null, user);
        }).catch(function(err) {
            return done(err);
        });
});

module.exports = passport;