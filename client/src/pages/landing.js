import React, { Component } from "react";
import PlantStream from "../components/PlantStream";
import WaterBtn from "../components/Buttons/WaterBtn";
import LightOnBtn from "../components/Buttons/LightOnBtn";
import LightOffBtn from "../components/Buttons/LightOffBtn";
import Nav from "../components/Nav";
import API from "../utils/API";


class Landing extends Component {
    state = {
        humidity: 65,
        temp: 68,
        soilMoisture: 30,
        isLoggedIn: false,
        lightState: "off"
    }

    componentDidMount = () => {
        this.getSensorData();
        this.setState({isLoggedIn:true});
        this.getLightState();
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
        .then((response) => {
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
                <Nav isLoggedIn={isLoggedIn} landingStyle="fixed-top"/>
                <div className="row landing-container">
                    <div className="auth-inner col col-sm-8" >
                        <PlantStream/>
                        <br />
                        
                        <WaterBtn onClick={this.handleWaterButton} >Water Me</WaterBtn>
                        {
                            this.state.lightState === "off" ? 
                            <LightOnBtn onClick={this.handleLightClick} >Turn Light On</LightOnBtn> : 
                            <LightOffBtn onClick={this.handleLightClick} >Turn Off Light</LightOffBtn>
                            
                        }
                        

                    </div >
                    <div className="auth-inner temp-container col col-sm-3" id="ContainerRight">
                        <div className="data-item">
                            <div>Humidity: </div>
                            <div>{this.state.humidity}%</div>
                        </div>
                        <div className="data-item">
                            <div>Soil Water Content: </div>
                            <div>{this.state.soilMoisture}%</div>
                        </div>
                        <div className="data-item">
                            <div>Temp: </div>
                            <div>{this.state.temp}{"\u00b0"}</div>
                        </div>                
                    </div>
                </div>
            </div >
        );
    }
}

export default Landing;


