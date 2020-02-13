// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('../config/passport');

// Log-in route. Authenticates via Passport.js local strategy in config/passport.js.
// On success sends username back to the client.
router.post('/log-in',
  passport.authenticate('local'),
  (req, res) => {
    console.log(`${req.user} is logged in.`);
    const userInfo = {
      username: req.user.username
    };
    res.send(userInfo)  ;
  }
);

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

module.exports = router;