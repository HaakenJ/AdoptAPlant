
const sensor = require("node-dht-sensor").promises;


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
            console.log(`temp: ${tempF} degrees F, ` + 
                `humidity: ${humidity}% ` +
                `at ${new Date()}.`
	    );
        })
	.catch(err => console.log(`Could not read sensor data: ${err}`));
};

module.exports = readSensor();
