import React from "react";

export function SubmitBtn(props) {
    return (
        <button {...props} type="submit" className="btn btn-primary btn-flex welcome-btn">{props.children}</button>
    );
}

export default SubmitBtn;