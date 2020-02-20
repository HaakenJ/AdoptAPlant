import React from 'react';

function Dropdown(props) {
    return (
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose a time
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" onClick={props.onClick} value="1" href="#">1:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="2" href="#">2:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="3" href="#">3:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="4" href="#">4:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="5" href="#">5:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="6" href="#">6:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="7" href="#">7:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="8" href="#">8:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="9" href="#">9:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="10" href="#">10:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="11" href="#">11:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="12" href="#">12:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="13" href="#">13:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="14" href="#">14:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="15" href="#">15:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="16" href="#">16:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="17" href="#">17:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="18" href="#">18:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="19" href="#">19:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="20" href="#">20:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="21" href="#">21:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="22" href="#">22:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="23" href="#">23:00</a>
                <a className="dropdown-item" onClick={props.onClick} value="0" href="#">00:00</a>
            </div>
        </div>
    )
}

export default Dropdown;