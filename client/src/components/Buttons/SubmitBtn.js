import React from "react";

export function SubmitBtn(props) {
    return (
        <button type="submit" className="btn btn-primary btn-flex">{props.children}</button>
    );
}

export default SubmitBtn;