const readFromDHT = require("./dht-sensor");
const readSoilSensor = require("./soilSensor");
const mongoose = require("mongoose");
const db = require("../models");

// This script will be run by a cron job once every hour and will log the data
// from the sensors into the MongoDB database.

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://localhost/temphumiditylog" ||
    // Not sure if this is the correct address.
    "mongodb://AdoptAPlant.hopto.org:8888/temphumiditylog");


readFromDHT()
.then((temp, humidity) => {
    readSoilSensor()
    .then(soilHumidity => {
        const dataObj = {
            "temp": temp,
            "humidity": humidity,
            "soilHumidity": soilHumidity
        };
        db.Temp
          .create(dataObj)
          .then(dbModel => console.log(dbModel))
          .catch(err => console.log(err));
    })
})