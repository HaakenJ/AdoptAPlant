import React from "react";
import plantImg from "../../images/plantImg.png";
import waterGif from "../../images/watering-gif.gif";

export function PlantStream(props) {
    return(
        <img id="plant-stream" src={props.streamImg} alt="plogo" 
        style={{ height: "100%", width: "100%", marginBottom: "25px" }} />
    );
}

export default PlantStream;

// plantImg && "http://adoptaplant.hopto.org:8081/"
