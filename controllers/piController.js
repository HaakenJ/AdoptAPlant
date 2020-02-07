const db = require('../models');

// The only task of this controller will be to supply the sensor data from
// the database to the client.  The client will not create or update any
// of the data.  The data is only created by a cron job on the server.

// Defining methods for the piController
module.exports = {
  findAll: function(req, res) {
    db.Temp
      .find()
      .sort({ _id: -1 })
      .limit(24)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
