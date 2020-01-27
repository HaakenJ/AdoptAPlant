
const sensor = require("node-dht-sensor").promises;


function readSensor() {
    // Initialize sensor, max retries.
    // Sensor is a dht11 on GPIO port 17.
    sensor.setMaxRetries(10);
    sensor.initialize(11, 17);

	// Read from the sensor and log the output.
    sensor.read(11, 17)
        .then( res => {
            const tempF = res.temperature.toFixed(1) * 1.8 + 32; 
            console.log(`temp: ${tempF} degrees F, ` + 
                `humidity: ${res.humidity.toFixed(1)}% ` +
                `at ${new Date()}.`
	    );
        })
	.catch(err => console.log(`There was an error: ${err}`));
};

module.exports = readSensor();
