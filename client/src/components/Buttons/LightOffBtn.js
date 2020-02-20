import React from "react";

export function LightOffBtn(props) {
    return (
        <button type="submit" {...props} className=" btn btn-primary" id="light-btn" style={{ backgroundColor: "#001D00", color:"white" }}>{props.children}</button >
    );
}

export default LightOffBtn;