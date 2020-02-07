const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
// const pump = require("./pump");
const setLightState = require("./light");

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("raspi"));


// Routes
app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "raspi/index.html"));
})

app.get("/api/templog", (req, res) => {
    let results = [];
    fs.createReadStream("raspi/templog.csv")
    .pipe(csv())
    .on("data", data => results.push(data))
    .on("end", () => {
        results = results.slice(results.length - 5,);
        return res.send(results);
    })
})

// // Route to turn on water pump for 3 seconds
// app.put("/api/water", (req, res) => {
//     setPumpState("on")
//     .then(() => {
//         console.log("Pump is on");
//         setTimeout(() => {
//             setPumpState("off")
//             .then(() => console.log("pump is off"))
//             .catch(err => console.log(`There was an error with 
//             the pump: ${err}`));
//         }, 3000);
//     })
//     .catch(err => {
//         console.log(`There was an error with the pump: ${err}`);
//     })
// })

app.put("/api/light", (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Test server listening on port: ${PORT}`);
})
