const sensor = require("node-dht-sensor").promises;
const fs = require("fs");


module.exports = function readSensor() {
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
            fs.appendFile("./templog", 
                `${tempF}, 
                ${humidity}, 
                ${time.getMinutes()}, 
                ${time.getHours()}, 
                ${time.getDate()}, 
                ${time.getMonth()}`, 
                err => {
                    if (err) throw err;
                    console.log("Temp and humidity have been saved.");
            });
        })
        .catch(err => console.log(`Could not read sensor data: ${err}`));
};