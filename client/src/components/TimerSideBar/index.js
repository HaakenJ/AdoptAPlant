import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import API from '../../utils/API';

class TimerSideBar extends Component {
    constructor() {
        super();
        this.state = {
            isJobRunning: null,
            time: null,
            frequency: null
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
                time: response.data.waterAt,
                frequency: response.data.frequency
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

    handleTimeClick = event => {
        API.setTime(event.target.dataset.time)
        .then(response => {
            console.log(response);
            this.getTimerState();
        })
    }

    handleFrequencyClick = event => {
        API.setFrequency(event.target.dataset.freq)
        .then(response => {
            console.log(response);
            this.getTimerState();
        })
    }

    render() {
        return (
            <div className="auth-inner side-container mt-3" id="ContainerRight">
                {
                    this.state.isJobRunning ?
                        <div className="mb-3">
                            <button type="button" className="btn btn-dark mb-3" onClick={this.stopJob} >Cancel Schedule</button>
                            <p className="timer-header">Watering {this.state.frequency} at: {this.state.time}:00</p>
                        </div> 
                        :
                        <div className="mb-3">
                            <button type="button" className="btn btn-light mb-3" onClick={this.startJob} >Start Schedule</button>
                            <p className="timer-header">Water {this.state.frequency} at: {this.state.time}:00</p>
                            <p>Water schedule is not currently running</p>
                        </div>
                }

                <p className="timer-header">Water: </p>
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose a Frequency
                        </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" onClick={this.handleFrequencyClick} data-freq="Every Day" href="#">Every Day</a>
                        <a className="dropdown-item" onClick={this.handleFrequencyClick} data-freq="Every Other Day" href="#">Every Other Day</a>
                        <a className="dropdown-item" onClick={this.handleFrequencyClick} data-freq="Every Three Days" href="#">Every Three Days</a>
                        <a className="dropdown-item" onClick={this.handleFrequencyClick} data-freq="Every Four Days" href="#">Every Four Days</a>
                        <a className="dropdown-item" onClick={this.handleFrequencyClick} data-freq="Every Five Days" href="#">Every Five Days</a>
                        <a className="dropdown-item" onClick={this.handleFrequencyClick} data-freq="Every Six Days" href="#">Every Six Days</a>
                        <a className="dropdown-item" onClick={this.handleFrequencyClick} data-freq="Every Week" href="#">Every Week</a>
                    </div>
                </div>

                <p className="timer-header mt-3">At: </p>
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose a Time
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="0" href="#">00:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="1" href="#">01:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="2" href="#">02:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="3" href="#">03:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="4" href="#">04:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="5" href="#">05:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="6" href="#">06:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="7" href="#">07:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="8" href="#">08:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="9" href="#">09:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="10" href="#">10:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="11" href="#">11:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="12" href="#">12:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="13" href="#">13:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="14" href="#">14:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="15" href="#">15:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="16" href="#">16:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="17" href="#">17:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="18" href="#">18:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="19" href="#">19:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="20" href="#">20:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="21" href="#">21:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="22" href="#">22:00</a>
                        <a className="dropdown-item" onClick={this.handleTimeClick} data-time="23" href="#">23:00</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerSideBar;