const firebase = require("firebase");
const express = require("express");
const router = express.Router();

// This route will set the set-time command in firebase to the time in the 
// request.

const db = firebase.app().database();

const ref = db.ref("commands/time");

// Route to set the water schedule time
router.post("/set-time", (req, res) => {
  ref.update({
      waterAt: parseInt(req.body.time)
    })
    .then(response => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(`There was an error updating firebase: ${err}`);
    })
})

// Route to get the status of the schedule time and runJob parameter
router.get("/get-time", (req, res) => {
  ref.once("value", snap => {
      // Return both runJob and waterAt
      res.send(snap.val());
    })
    .catch(err => {
      console.log(`There was an error reading from firebase: ${err}`);
    })
})


// Route to start the water schedule job
router.post("/start-job", (req, res) => {
  ref.update({
      runJob: true
    })
    .then(response => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(`There was an error updating firebase: ${err}`);
    })
})

// Route to stop the water schedule job
router.post("/stop-job", (req, res) => {
  ref.update({
      runJob: false
    })
    .then(response => {
      res.status(200).end();
    })
    .catch(err => {
      console.log(`There was an error updating firebase: ${err}`);
    })
})

module.exports = router;