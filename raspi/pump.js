const Gpio = require("onoff").Gpio;
// Use GPIO pin 27 and specify that it is output.
const pump = new Gpio(27, "out");

// Function to toggle the running state of the water pump.
module.exports = function togglepump() {
    pump.read()
        .then(value => pump.write(value ^ 1))
        .catch(err => console.log(err));
};