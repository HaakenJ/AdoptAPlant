import React from "react";
import logo from "../../images/CBP-Logo-Web.png"

export function PlantStream(props) {
    return(
        <img id="plant-stream" src={logo && "http://10.0.0.128:8081/"} alt="plogo" style={{ height: "100%", width: "100%", marginBottom: "25px" }} />
    );
}

export default PlantStream;
