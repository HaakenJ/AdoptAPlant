const sensor = require("node-dht-sensor").promises;
const fs = require("fs");
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/tempHumidity" ||
    "mongodb://AdoptAPlant.hopto.org:8888"
);


function logToMongo() {
    // Initialize sensor, max retries.
    // Sensor is a dht11 on GPIO port 17.
    sensor.setMaxRetries(10);
    sensor.initialize(11, 17);

    // Read from the sensor and log the output.
    // 11 is the sensor type (dht11) and 17 is the GPIO port number.
    sensor.read(11, 17)
        .then(res => {
            const tempF = res.temperature.toFixed(1) * 1.8 + 32;
            const humidity = res.humidity.toFixed(1);

            const tempHumid = {
                temp: tempF,
                humidity: humidity,
                createAt: new Date(Date.now())
            };

            db.Temp
                .create(tempHumid)
                .then(dbModel => {
                    console.log("Temp and humidity recorded.");
                    process.exit(0);
                })
                .catch(err => {
                    console.error(err);
                    process.exit(1);
                });





        })
        .catch(err => console.log(`Could not read sensor data: ${err}`));
}


function readSensor() {
    // Initialize sensor, max retries.
    // Sensor is a dht11 on GPIO port 17.
    sensor.setMaxRetries(10);
    sensor.initialize(11, 17);

    // Read from the sensor and log the output.
    // 11 is the sensor type (dht11) and 17 is the GPIO port number.
    sensor.read(11, 17)
        .then(res => {
            const tempF = res.temperature.toFixed(1) * 1.8 + 32;
            const humidity = res.humidity.toFixed(1);
            const time = new Date();
            console.log(`${tempF},${humidity},${time.getMinutes()},${time.getHours()},${time.getDate()},${time.getMonth()}`);
        })
        .catch(err => console.log(`Could not read sensor data: ${err}`));
};

readSensor();