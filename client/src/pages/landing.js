import React, { Component } from "react";
import PlantStream from "../components/PlantStream";
import WaterBtn from "../components/Buttons/WaterBtn";
import LightOnBtn from "../components/Buttons/LightOnBtn";
import LightOffBtn from "../components/Buttons/LightOffBtn";
import Nav from "../components/Nav";
import TimerSideBar from "../components/TimerSideBar";
import API from "../utils/API";


class Landing extends Component {
    state = {
        humidity: 65,
        temp: 68,
        soilMoisture: "Wet",
        isLoggedIn: false,
        lightState: "off"

    }

    componentDidMount = () => {
        this.getSensorData();
        this.getLightState();
        this.loginternary();
    }

    getSensorData = () => {
        API.getSensorData()
        .then(response => {
            this.setState({
                humidity: response.data.humidity,
                temp: response.data.temp,
                soilMoisture: response.data.soilMoisture
            })
        })
        .catch(err => {
            console.log(`Error with firebase: ${err}`);
        })
    }

    loginternary = () => {
        if (localStorage.getItem("username")) {
            this.setState({ isLoggedIn: true })
    }}

    getLightState = () => {
        API.getLightState()
        .then(response => {
            this.setState({
                lightState: response.data
            })
        })
        .catch(err => {
            console.log(`There was an error getting the light state: ${err}`);
        })
    }

    handleLightClick = () => {
        API.toggleLight()
        .then(response => {
            this.getLightState();
        })
    }

    handleWaterButton = () => {
        API.waterPlant()
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        return (
            
            <div className="auth-wrapper">
                <Nav isLoggedIn={isLoggedIn} landingStyle="fixed-top" onLogOut={this.handleLogOutClick} />
                <div className="row landing-container">
                    <div className="auth-inner col col-sm-12 col-md-8 stream-container" >
                        <div className="container-fluid" id="most-inner">
                             <div className="row justify-content-between">
                                <div className="sensor-data micro col col-sm-3">
                                    <div className="data-item">
                                        <div>Humidity: </div>
                                        <div>{this.state.humidity}%</div>
                                    </div>
                                    <div className="data-item">
                                        <div>Moisture Level: </div>
                                        <div>{this.state.soilMoisture}</div>
                                    </div>
                                    <div className="data-item">
                                        <div>Temp: </div>
                                        <div>{this.state.temp}{"\u00b0"}</div>
                                    </div>
                                </div>
                                <div className="micro col col-sm-8">
                                    <PlantStream/>

                                    <br></br>
                        
                                    <WaterBtn onClick={this.handleWaterButton} >Water Me</WaterBtn>
                                    {
                                        this.state.lightState === "off" ? 
                                        <LightOnBtn onClick={this.handleLightClick} >Turn Light On</LightOnBtn> : 
                                        <LightOffBtn onClick={this.handleLightClick} >Turn Off Light</LightOffBtn>
                                    }
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="col col-sm-12 col-md-4 right-side">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="auth-inner side-container" id="ContainerRight">
                                    <br></br>
                                    <p className="plant-info"><strong>Plant Name:</strong> Welsh Onion</p>
                                    <p className="plant-info"><strong>Scientific Name:</strong> Allium Fistulosum</p>
                                    <p className="plant-info"><strong>Optimum Temperature:</strong> 68-77 Degrees F</p>
                                    <p className="plant-info"><strong>Time from Seed to Harvest:</strong> 40-50 Days.</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <TimerSideBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Landing;



