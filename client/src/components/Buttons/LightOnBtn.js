import React from "react";

export function LightOnBtn(props) {
    return (
        <button type="submit" {...props} className=" btn btn-primary" id="light-btn" style={{ backgroundColor: "yellow", color:"black" }}>{props.children}</button >
    );
}

export default LightOnBtn;