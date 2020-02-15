import React from "react";

export function LightOffBtn(props) {
    return (
        <button type="submit" {...props} className=" btn btn-primary" id="light-btn" style={{ backgroundColor: "black", color:"white" }}>{props.children}</button >
    );
}

export default LightOffBtn;