const readFromDHT = require("./dht-sensor");
const readSoilMoisture = require("./soilSensor");
const mongoose = require("mongoose");
const db = require("../models");

// This script will be run by a cron job once every hour and will log the data
// from the sensors into the MongoDB database.

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/temphumiditylog" ||
    // Not sure if this is the correct address.
    "mongodb://AdoptAPlant.hopto.org:8888/adoptaplant");


readFromDHT()
    .then((temp, humidity) => {
        readSoilMoisture()
            .then(soilMoisture => {
                const dataObj = {
                    "temp": temp,
                    "humidity": humidity,
                    "soilMoisture": soilMoisture
                };
                db.Temp
                    .create(dataObj)
                    .then(dbModel => console.log(dbModel))
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.log(`There was an error with the soil moisture 
                sensor: ${err}`);
            })
    })
    .catch(err => {
        console.log(`There was an error with the DHT sensor: ${err}`);
    })