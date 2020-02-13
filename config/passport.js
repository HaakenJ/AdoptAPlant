const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');
require('dotenv').config();

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

// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
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