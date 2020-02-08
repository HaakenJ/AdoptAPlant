// Dependencies
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('../config/passport');

router.use('/login', (req, res) => {
  console.log("")
});

module.exports = router;