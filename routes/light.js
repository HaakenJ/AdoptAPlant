require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.put("/light", (req, res) => {
    let power;
    const token = process.env.LIGHT_TOKEN;
    req.body.power === "on" ? power = "on": power = "off";

    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        url: "https://api.lifx.com/v1/lights/all/state",
        method: "PUT",
        data: {
            "power": power,
            "color": "white",
            "brightness": 1.0
        }
    })
    .then(() => {
        res.status(200).end();
    })
    .catch(err => {
        console.log(`There was an error with the light: ${err}`);
    });
})

module.exports = router;

// This script will turn the lights on or off and returns a promise that 
// resolves with the current state of the light (on or off).

// function setLightState(power = "off") {

//     return new Promise((resolve, reject) => {
//         const token = process.env.LIGHT_TOKEN;

//         try {
//             if (power != "on" && power != "off") {
//                 throw `You need to set power to 'on' or 'off'. Exititing.`;
//             }
//         } catch {
//             reject(new Error("You need to set power to 'on' or 'off'."));
//         }

//         axios({
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 },
//                 url: "https://api.lifx.com/v1/lights/all/state",
//                 method: "PUT",
//                 data: {
//                     "power": power,
//                     "color": "white",
//                     "brightness": 1.0
//                 }
//             })
//             .then(res => resolve(power))
//             .catch(err => {
//                 reject(err);
//             });
//     })
// }

// module.exports = setLightState;
