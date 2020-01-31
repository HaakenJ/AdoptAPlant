const Gpio = require("onoff").Gpio;

// Function to toggle the running state of the water pump.
function togglepump() {
    // Check if GPIO pins are accessible from current environment.
    if (Gpio.accessible) {
        // Use GPIO pin 27 and specify that it is output.
        const pump = new Gpio(27, "out");
        pump.read()
            .then(value => pump.write(value ^ 1))
            .catch(err => console.log(err));
    } else {
        console.log("No GPIO pins are currently available.  " + 
        "Please ensure that this code is running on a raspberryPi.");
    }
};

togglepump();