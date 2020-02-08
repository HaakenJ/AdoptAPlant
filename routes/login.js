// Dependencies
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('../config/passport');

router.get('/', (req, res, next) => {
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
});

router.use('/login', (req, res) => {
  console.log("")
});

module.exports = router;