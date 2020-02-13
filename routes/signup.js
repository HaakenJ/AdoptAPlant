// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../models');

// New User Sign-Up
router.post('/sign-up', (req, res) => {
  const { email, username, password } = req.body;
  
  // Check if username already exists
  db.User.findOne({ username: username })
    .then((user) => {
      if (user) {
        res.json({
          userAlreadyExists: "Username is taken, please submit a new username."
        });
      } else {
        // If the username does not exist, create a new user.
        db.User.create({
          email: email,
          username: username,
          password: password
        }).then((dbUser) => {
          res.json(dbUser);
        }).catch((error) => {
          console.log(error);
        });
      }
    }).catch((error) => {
      console.log(error)
    });
});

module.exports = router;