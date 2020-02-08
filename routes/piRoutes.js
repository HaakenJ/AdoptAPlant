const router = require("express").Router();
const fs = require("fs");
const csv = require("csv-parser");
<<<<<<< HEAD
const pump = require("../raspi/pump");
const setLightState = require("../raspi/light");
=======
// These files need to be added once they are no longer being modified.
const setPumpState = require("../controllers/pump");
const setLightState = require("..controllers/light");
const controller = require("../controllers/piController");
>>>>>>> 2a22729bb1de07ed9b9e3b72297740bbcce9efa6

// This route needs to be changed to use MongoDB
router.get("/templog", (req, res) => {
    controller.findAll()
    .then(data => {
        res.send(data);
    })
    // let results = [];
    // fs.createReadStream("raspi/templog.csv")
    // .pipe(csv())
    // .on("data", data => results.push(data))
    // .on("end", () => {
    //     results = results.slice(results.length - 5,);
    //     return res.send(results);
    // })
})

// Route to turn on water pump for 3 seconds
router.put("/water", (req, res) => {
    setPumpState("on")
    .then(() => {
        console.log("Pump is on");
        setTimeout(() => {
            setPumpState("off")
            .then(() => console.log("pump is off"))
            .catch(err => console.log(`There was an error with 
            the pump: ${err}`));
        }, 3000);
    })
    .catch(err => {
        console.log(`There was an error with the pump: ${err}`);
    })
})

// Route to turn the light on or off.
router.put("/light", (req, res) => {
    setLightState(req.body.power)
    .then(state => {
        console.log(`The power is now ${state}`);
        res.status(200).end();
    })
    .catch(err => {
        console.log(`There was an error with the light: ${err}`);
        res.status(503).end();
    })
})

module.exports = router;