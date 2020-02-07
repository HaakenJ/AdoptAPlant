const db = require('../models');

// Defining methods for the piController
module.exports = {
  findAll: function(req, res) {
    db.Temp
      .find()
      .sort({ _id: -1 })
      .limit(24)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Temp
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
