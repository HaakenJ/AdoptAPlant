import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import API from '../../utils/API';

class TimerSideBar extends Component {
    constructor() {
        super();
        this.state = {
            isJobRunning = null,
            time = null
        }
    }

    componentDidMount() {
        this.getTimerState();
    }

    getTimerState() {
        API.getTimeAndJobStatus()
        .then(response => {
            this.setState({
                isJobRunning: response.data.runJob,
                time: response.data.time
            })
        })
        .catch(err => {
            console.log(`There was an error getting the timer status 
            from firebase: ${err}`);
        })
    }

    startJob() {
        API.startJob()
        .then(response => {
            console.log("The watering schedule has been started");
        })
        .catch(err => {
            console.log(`There was an error updating runJob 
            on firebase: ${err}`);
        })
    }

    stopJob() {
        API.stopJob()
        .then(response => {
            console.log("The watering schedule has been stopped");
        })
        .catch(err => {
            console.log(`There was an error updating runJob 
            on firebase: ${err}`);
        })
    }

    render() {
        return (
            <div className="auth-inner temp-container col col-sm-3" id="ContainerRight">
                {
                    this.state.isJobRunning ?
                        <div>
                            <button type="button" class="btn btn-dark" onClick={this.stopJob} >Cancel Schedule</button>
                            <p>Your plant is set to be watered every day at: </p>
                            <p>{this.state.time}</p>
                        </div> 
                        :
                        <div>
                            <button type="button" class="btn btn-light" onClick={this.startJob} >Start Schedule</button>
                            <p>Your water schedule is not currently set.</p>
                        </div>
                }
                <Dropdown />                           
            </div>
        )
    }
}