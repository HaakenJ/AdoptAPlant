// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const cors = require('cors');

// let corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 
// }

router.get('/facebook', cors(), passport.authenticate('facebook'));

router.get('/facebook/callback', cors(), passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/log-in' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/landing')
  });

module.exports = router;
