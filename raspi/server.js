const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
const pump = require("./pump");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("raspi"));

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
    });
});

app.put("/api/water", (req, res) => {
    pump.runPump();
    console.log("Pump is on");
    setTimeout(() => {
        pump.shutOffPump();
        console.log("pump is off");
    }, 3000);
})

app.listen(PORT, () => {
    console.log(`Test server listening on port: ${PORT}`);
});
