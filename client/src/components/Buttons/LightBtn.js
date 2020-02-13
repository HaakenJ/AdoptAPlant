import React from "react";

export function LightBtn(props) {
    return (
        <button type="submit" className=" btn btn-primary" id="light-btn" style={{ backgroundColor: "yellow", color:"black" }}>{props.children}</button >
    );
}

export default LightBtn;