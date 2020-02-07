const Gpio = require("onoff").Gpio;
// Initialize pump on GPIO port 27 with signal set to high.
const pump = new Gpio(27, "high");

function runPump() {
    return new Promise((resolve, reject) => {
        pump.write(0)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}

function shutOffPump() {
    return new Promise((resolve, reject) => {
        pump.write(1)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}

exports.runPump = runPump;
exports.shutOffPump = shutOffPump;