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
                        
                        <div class="container-fluid" id="most-inner">
                             <div class="row">

                             <div className="miro col col-sm-3">
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
                    <div className="auth-inner temp-container col col-sm-3" id="ContainerRight">
                        <div className="Plant Information">
                            <br></br>
                            <h3>Plant Name: Welsh Onion</h3>
                            <h3>Scientific Name: Allium Fistulosum</h3>
                            <h3>Optimum Temperature: 68-77 Degrees F</h3>
                            <h3>Time from Seed to Produce: 40-50 Days.</h3>
                            <h3>Recommended Soil Depth: 1/2 inches. </h3> 
                            <br></br>                         
                            
                        </div>
                            
                    </div>
                </div>
            </div >
        );
    }
}

export default Landing;



