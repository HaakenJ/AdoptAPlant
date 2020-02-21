const firebase = require("firebase");
const express = require("express");
const router = express.Router();

// This route will set the water command to true in firebase.
// The water pump will query for this to happen, run the pump,
// then set the water command back to false.

const db = firebase.app().database();

const ref = db.ref("commands/");

router.post("/set-time", (req, res) => {
  console.log(req.body.time);
  ref.set({ time: req.body.time })
  .then(() => {
      res.status(200).end();
  })
  .catch(err => {
      console.log(`There was an error updating firebase: ${err}`);
  })
})

module.exports = router;