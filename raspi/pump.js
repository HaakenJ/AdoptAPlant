const Gpio = require("onoff").Gpio;
// Use GPIO pin 27 and specify that it is output.
const Pump = new Gpio(27, "out"); 

// Function to run the water pump.
function togglePump() {
    // Check the pump state, 0 is off.
    if (Pump.readSync() === 0) {
        Pump.writeSync(1);
    } else {
        Pump.writeSync(0);
    }
};

setTimeout(togglePump, 1000);
