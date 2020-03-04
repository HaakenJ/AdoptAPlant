import React from "react";
import plantImg from "../../images/plantImg.png";

export function PlantStream(props) {
    return(
        <img id="plant-stream" src={plantImg && "http://adoptaplant.hopto.org:8081/"} alt="plogo" style={{ height: "100%", width: "100%", marginBottom: "25px" }} />
    );
}

export default PlantStream;
