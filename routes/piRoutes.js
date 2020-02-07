const router = require("express").Router();
const fs = require("fs");
const csv = require("csv-parser");
const pump = require("../controllers/pump");
const setLightState = require("..controllers/light");

router.get("/templog", (req, res) => {
    let results = [];
    fs.createReadStream("raspi/templog.csv")
    .pipe(csv())
    .on("data", data => results.push(data))
    .on("end", () => {
        results = results.slice(results.length - 5,);
        return res.send(results);
    })
})

router.put("/water", (req, res) => {

    // Turn on the water pump.
    pump.runPump();
    console.log("Pump is on");

    // Shut the pump off after time interval.
    setTimeout(() => {
        pump.shutOffPump();
        console.log("pump is off");
    }, 3000);
})

router.put("/light", (req, res) => {
    setLightState(req.body.power);
    res.end();
})

module.exports = router;