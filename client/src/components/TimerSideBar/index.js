import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import API from '../../utils/API';

class TimerSideBar extends Component {
    constructor() {
        super();
        this.state = {
            isJobRunning: null,
            time: null
        }
    }

    componentDidMount() {
        this.getTimerState();
    }

    getTimerState = () => {
        API.getTimeAndJobStatus()
        .then(response => {
            this.setState({
                isJobRunning: response.data.runJob,
                time: response.data.waterAt
            })
        })
        .catch(err => {
            console.log(`There was an error getting the timer status 
            from firebase: ${err}`);
        })
    }

    startJob = () => {
        API.startJob()
        .then(response => {
            console.log("The watering schedule has been started");
            this.getTimerState();
        })
        .catch(err => {
            console.log(`There was an error updating runJob 
            on firebase: ${err}`);
        })
    }

    stopJob = () => {
        API.stopJob()
        .then(response => {
            console.log("The watering schedule has been stopped");
            this.getTimerState();
        })
        .catch(err => {
            console.log(`There was an error updating runJob 
            on firebase: ${err}`);
        })
    }

    handleDropdownClick = (event) => {
        API.setTime(event.target.dataset.time)
        .then(response => {
            console.log(response);
            this.getTimerState();
        })
    }

    render() {
        return (
            <div className="auth-inner temp-container col col-sm-3" id="ContainerRight">
                {
                    this.state.isJobRunning ?
                        <div className="mb-5">
                            <button type="button" className="btn btn-dark mb-5" onClick={this.stopJob} >Cancel Schedule</button>
                            <p className="timer-header">Your plant is set to be watered every day at: </p>
                            <p>{this.state.time}:00</p>
                        </div> 
                        :
                        <div className="mb-5">
                            <button type="button" className="btn btn-light mb-5" onClick={this.startJob} >Start Schedule</button>
                            <p className="timer-header">Your plant will be watered every day at: </p>
                            <p>{this.state.time}:00</p>
                            <p className="timer-header">Press 'Start Schedule' to start the timer!</p>
                        </div>
                }
                
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose a time
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="1" href="#">1:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="2" href="#">2:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="3" href="#">3:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="4" href="#">4:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="5" href="#">5:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="6" href="#">6:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="7" href="#">7:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="8" href="#">8:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="9" href="#">9:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="10" href="#">10:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="11" href="#">11:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="12" href="#">12:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="13" href="#">13:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="14" href="#">14:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="15" href="#">15:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="16" href="#">16:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="17" href="#">17:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="18" href="#">18:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="19" href="#">19:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="20" href="#">20:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="21" href="#">21:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="22" href="#">22:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="23" href="#">23:00</a>
                        <a className="dropdown-item" onClick={this.handleDropdownClick} data-time="0" href="#">00:00</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerSideBar;