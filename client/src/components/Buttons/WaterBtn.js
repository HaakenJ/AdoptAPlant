import React from "react";

export function WaterBtn(props) {
    return (
        <button type="submit" {...props} className=" btn btn-primary" id="water-btn" style={{ backgroundColor: "blue" }}>{props.children}</button >
    );
}

export default WaterBtn;