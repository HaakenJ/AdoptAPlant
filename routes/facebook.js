// Dependencies
const express = require('express');
const router = express.Router();
var passport = require('../config/passport');

router.get('/facebook',
  passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/log-in' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/landing');
  });

module.exports = router;
