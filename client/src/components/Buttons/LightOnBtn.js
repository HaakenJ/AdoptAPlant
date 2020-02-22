import React from "react";

export function LightOnBtn(props) {
    return (
        <button type="submit" {...props} className=" btn btn-primary" id="light-btn" style={{ backgroundColor: "rgb(255, 255, 245)", color:"#001D00" }}>{props.children}</button >
    );
}

export default LightOnBtn;