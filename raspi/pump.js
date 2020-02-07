const Gpio = require("onoff").Gpio;
// Initialize pump on GPIO port 27 with signal set to high.
const pump = new Gpio(27, "high");

function runPump() {
    pump.write(0)
    .then(() => {
        console.log("Pump should be on.");
    })
}

function shutOffPump() {
    pump.write(1)
    .then(() => {
        console.log("Pump should be off");
    })
}

exports.runPump = runPump;
exports.shutOffPump = shutOffPump;