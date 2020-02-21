import React from 'react';
import API from '../../utils/API';

const handleDropdownClick = (event) => {
    console.log(event.target.dataset.time);
    API.setTime(event.target.dataset.time)
    .then(response => {
        console.log(response);
    })
}

function Dropdown() {
    return (
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose a time
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="1" href="#">1:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="2" href="#">2:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="3" href="#">3:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="4" href="#">4:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="5" href="#">5:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="6" href="#">6:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="7" href="#">7:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="8" href="#">8:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="9" href="#">9:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="10" href="#">10:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="11" href="#">11:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="12" href="#">12:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="13" href="#">13:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="14" href="#">14:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="15" href="#">15:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="16" href="#">16:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="17" href="#">17:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="18" href="#">18:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="19" href="#">19:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="20" href="#">20:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="21" href="#">21:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="22" href="#">22:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="23" href="#">23:00</a>
                <a className="dropdown-item" onClick={handleDropdownClick} data-time="0" href="#">00:00</a>
            </div>
        </div>
    )
}

export default Dropdown;