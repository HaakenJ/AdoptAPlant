const Gpio = require("onoff").Gpio;
// Initialize pump on GPIO port 27 with signal set to high.
const pump = new Gpio(27, "high");

// This script turns the water pump on or off and returns a promise that 
// resolves with the current state of the pump.

function setPumpState(power = "off") {
    return new Promise((resolve, reject) => {
        pump.write(power === "on" ? 0: 1)
            .then(() => resolve(power))
            .catch(err => reject(err))
    })
}

module.exports = setPumpState;

// function runPump() {
//     return new Promise((resolve, reject) => {
//         pump.write(0)
//             .then(() => {
//                 resolve();
//             })
//             .catch(err => {
//                 reject(err);
//             })
//     })
// }

// function shutOffPump() {
//     return new Promise((resolve, reject) => {
//         pump.write(1)
//             .then(() => {
//                 resolve();
//             })
//             .catch(err => {
//                 reject(err);
//             })
//     })
// }

// exports.runPump = runPump;
// exports.shutOffPump = shutOffPump;

//setPumpState('on')
//  .then(power => {
//    setTimeout(setPumpState, 1000);
//  })
//  .catch(err => console.log(err));
