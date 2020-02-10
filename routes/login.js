// Dependencies
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('../config/passport');

router.use('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: 'landing',
    failureFlash: 'Invalid username or password'
  }),
  (req, res) => {
    console.log(`${req.user} is logged in.`);
    const userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
});

module.exports = router;