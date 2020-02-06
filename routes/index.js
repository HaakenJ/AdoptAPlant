const router = require("express").Router();
const fs = require("fs");
const csv = require("csv-parser");
const pump = require("./pump");
const setLightState = require("./light");

router.get("/api/templog", (req, res) => {
    let results = [];
    fs.createReadStream("raspi/templog.csv")
    .pipe(csv())
    .on("data", data => results.push(data))
    .on("end", () => {
        results = results.slice(results.length - 5,);
        return res.send(results);
    })
})

router.put("/api/water", (req, res) => {
    pump.runPump();
    console.log("Pump is on");
    setTimeout(() => {
        pump.shutOffPump();
        console.log("pump is off");
    }, 3000);
})

router.put("/api/light", (req, res) => {
    setLightState(req.body.power);
    res.end();
})

module.exports = router;
