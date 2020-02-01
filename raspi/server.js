const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/templog", (req, res) => {
    let results = [];
    fs.createReadStream("./templog.csv")
    .pipe(csv())
    .on("data", data => results.push(data))
    .on("end", () => {
        res.send(results);
    })
});

app.listen(PORT, () => {
    console.log(`Test server listening on port: ${PORT}`);
});