const Gpio = require("onoff").Gpio;
// Initialize pump and start it.
const pump = new Gpio(27, "high");

// Function to toggle the running state of the water pump.

function runPump() {
    pump.write(0)
    .then(() => {
        console.log("Pump should be on.");
    });
};

function shutOffPump() {
    pump.write(1)
    .then(() => {
        console.log("Pump should be off");
    });
};

exports.runPump = runPump;
exports.shutOffPump = shutOffPump;

//function togglePump() {
//    pump.write(1);
//    pump.read()
//        .then(value => pump.write(value ^ 1))
//        .catch(err => console.log(err));
//};

//setTimeout(togglePump, 3000);

//runPump();
//setTimeout(shutOffPump, 3000);
