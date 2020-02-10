const sensor = require("node-dht-sensor").promises;
const fs = require("fs");

// This script will read temperature and humidity from the DHT sensor and 
// return a promise that resolves with the temperature and humidity.


function readFromDHT() {
    // Initialize sensor, max retries.
    // Sensor is a dht11 on GPIO port 17.
    sensor.setMaxRetries(10);
    sensor.initialize(11, 17);

    return new Promise((resolve, reject) => {
        // Read from the sensor and log the output.
        // 11 is the sensor type (dht11) and 17 is the GPIO port number.
        sensor.read(11, 17)
            .then(res => {
                const tempF = Math.round(res.temperature * 1.8 + 32);
                const humidity = Math.round(res.humidity);
                const values = [tempF, humidity];

                resolve(values);
            })
            .catch(err => {
                reject(err);
            })
    })
}


function printFromSensor() {
    // Initialize sensor, max retries.
    // Sensor is a dht11 on GPIO port 17.
    sensor.setMaxRetries(10);
    sensor.initialize(11, 17);

    return new Promise((resolve, reject) => {
        // Read from the sensor and log the output.
        // 11 is the sensor type (dht11) and 17 is the GPIO port number.
        sensor.read(11, 17)
            .then(res => {
                const tempF = res.temperature.toFixed(1) * 1.8 + 32;
                const humidity = res.humidity.toFixed(1);
                const time = new Date();
                console.log(`${tempF},${humidity},${time.getMinutes()},${time.getHours()},${time.getDate()},${time.getMonth()}`);
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}

module.exports = readFromDHT;

printFromSensor();
