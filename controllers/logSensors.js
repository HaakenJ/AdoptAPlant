const readFromDHT = require("./dht-sensor");
const readSoilMoisture = require("./soilSensor");
// const mongoose = require("mongoose");
// const db = require("../models");

const firebase = require("firebase");

firebase.initializeApp({
    appName: "adoptaplant",
    serviceAccount: "../service-account.json",
    authDomain: "adoptaplant-1b4e1.firebaseapp.com",
    databaseURL: "https://adoptaplant-1b4e1.firebaseio.com",
    storageBucket: "adoptaplant-1b4e1.appspot.com"
});

const db = firebase.app().database();

const ref = db.ref("sensorData/");

// This script will be run by a cron job once every hour and will log the data
// from the sensors into the MongoDB database.

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI ||
//     "mongodb://localhost:27017/adoptaplant" ||
//     // Not sure if this is the correct address.
//     "mongodb://AdoptAPlant.hopto.org:8888/adoptaplant");


readFromDHT()
    .then((dhtData) => {
        console.log(`DHT data: ${dhtData}`);
        readSoilMoisture()
            .then(soilMoisture => {
                console.log(`Soil moisture content: ${soilMoisture}`);
                // const dataObj = {
                //     "temp": dhtData[0],
                //     "humidity": dhtData[1],
                //     "soilMoisture": soilMoisture,
                //     "minute": time.getMinutes(),
                //     "hour": time.getHours(),
                //     "day": time.getDay(),
                //     "month": time.getMonth(),
                //     "year": time.getFullYear()
                // };
                // db.Temp
                //     .create(dataObj)
                //     .then(dbModel => console.log(dbModel))
                //     .catch(err => console.log(err));
                ref.set({
                    temp: dhtData[0],
                    humidity: dhtData[1],
                    soilMoisture: soilMoisture,
                    time: Date.now()
                })
                .then(() => {
                    process.exit();
                })
                .catch(err => {
                    console.log(`There was an error writing to the database: ${err}`);
                })
            })
            .catch(err => {
                console.log(`There was an error with the soil moisture 
                sensor: ${err}`);
            })
    })
    .catch(err => {
        console.log(`There was an error with the DHT sensor: ${err}`);
    })
