require("dotenv").config();
const axios = require("axios");

module.exports = function setLightState(power = off, mode = night) {
    const token = process.env.LIGHT_TOKEN;
    let color;

    try {
        if (power != "on" && power != "off") {
            throw `You need to set power to 'on' or 'off'. Exititing.`;
        }
        if (mode != "day" && mode != "night") {
            throw `The only light modes are day and night.`;
        } 
    } catch {
        return;
    }

    mode === "day" ? color = "white": color = "green";

    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        url: "https://api.lifx.com/v1/lights/all/state",
        method: "PUT",
        data: {
            "power": power,
            "color": color,
            "brightness": 1.0
        }  
    }).then(res => console.log(`Light is now ${power}`));
}