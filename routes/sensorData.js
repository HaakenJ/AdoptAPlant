const firebase = require("firebase");
const express = require("express");
const router = express.Router();

firebase.initializeApp({
    appName: "adoptaplant",
    serviceAccount: "../service-account.json",
    authDomain: "adoptaplant-1b4e1.firebaseapp.com",
    databaseURL: "https://adoptaplant-1b4e1.firebaseio.com",
    storageBucket: "adoptaplant-1b4e1.appspot.com"
});

const db = firebase.app().database();

const ref = db.ref("sensorData/");

router.get("/data", (req, res) => {
  ref.once("value")
  .then(snap => {
      res.send(snap.val());
  })  
})

module.exports = router;