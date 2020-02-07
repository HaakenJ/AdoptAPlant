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
    pump.runPump()
    .then(() => {
        console.log("Pump is on");
        setTimeout(() => {
            pump.shutOffPump()
            .then(() => console.log("pump is off"))
        }, 3000);
    })
    .catch(err => {
        console.log(`There was an error with the pump: ${err}`);
    })
})

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