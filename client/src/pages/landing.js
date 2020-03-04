import React, { Component } from "react";
import PlantStream from "../components/PlantStream";
import WaterBtn from "../components/Buttons/WaterBtn";
import LightOnBtn from "../components/Buttons/LightOnBtn";
import LightOffBtn from "../components/Buttons/LightOffBtn";
import Nav from "../components/Nav";
import TimerSideBar from "../components/TimerSideBar";

import plantImg from "../images/plantImg.png";
import waterGif from "../images/watering-gif.gif";
import lightOffGif from "../images/light-off-gif.gif";
import lightOnGif from "../images/light-on-gif.gif";
import lightOffImg from "../images/light-off.png";

import API from "../utils/API";


class Landing extends Component {
    state = {
        humidity: 65,
        temp: 68,
        soilMoisture: "Wet",
        isLoggedIn: false,
        lightState: "off",
        streamImg: plantImg
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
        // API.getLightState()
        // .then(response => {
        //     this.setState({
        //         lightState: response.data
        //     })
        // })
        // .catch(err => {
        //     console.log(`There was an error getting the light state: ${err}`);
        // })
        this.setState({
            lightState: "on"
        })
    }

    handleLightClick = () => {
        // API.toggleLight()
        // .then(response => {
        //     this.getLightState();
        // })
        if (this.state.lightState === "on") {
            this.setState({
                streamImg: lightOffGif
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        streamImg: lightOffImg,
                        lightState: "off"
                    })
                }, 1000)
            })
        } else {
            this.setState({
                streamImg: lightOnGif
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        streamImg: plantImg,
                        lightState: "on"
                    })
                }, 2000)
            })
        }
    }

    handleWaterButton = () => {
        // API.waterPlant()
        this.setState({
                streamImg: waterGif
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        streamImg: plantImg
                    })
                }, 3500)
            })
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
                                    <PlantStream streamImg={this.state.streamImg}/>

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
                                    <p className="plant-info">
                                        Unfortunately, due to space and power concerns, the plant system has been
                                        taken down.  Here you will see an image of the former live stream along with 
                                        gifs displaying the functionality in action.  Enjoy!
                                    </p>
                                    {/* <p className="plant-info"><strong>Plant Name:</strong> Welsh Onion</p>
                                    <p className="plant-info"><strong>Scientific Name:</strong> Allium Fistulosum</p>
                                    <p className="plant-info"><strong>Optimum Temperature:</strong> 68-77 Degrees F</p>
                                    <p className="plant-info"><strong>Time from Seed to Harvest:</strong> 40-50 Days.</p> */}
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



