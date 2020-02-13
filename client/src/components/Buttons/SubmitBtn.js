import React from "react";

export function SubmitBtn(props) {
    return (
        <button type="button" className="btn btn-primary btn-flex" onClick={props.handleClick}>{props.children}</button>
    );
}

export default SubmitBtn;