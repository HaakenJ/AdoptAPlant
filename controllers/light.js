require("dotenv").config();
const axios = require("axios");

// This script will turn the lights on or off and returns a promise that 
// resolves with the current state of the light (on or off).

function setLightState(power = "off") {

    return new Promise((resolve, reject) => {
        const token = process.env.LIGHT_TOKEN;

        try {
            if (power != "on" && power != "off") {
                throw `You need to set power to 'on' or 'off'. Exititing.`;
            }
        } catch {
            reject(new Error("You need to set power to 'on' or 'off'."));
        }

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
            .then(res => resolve(power))
            .catch(err => {
                reject(err);
            });
    })
}

module.exports = setLightState;
