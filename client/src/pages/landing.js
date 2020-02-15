import React, { Component } from 'react';
import PlantStream from '../components/PlantStream';
import WaterBtn from '../components/Buttons/WaterBtn';
import LightOnBtn from '../components/Buttons/LightOnBtn';
import LightOffBtn from '../components/Buttons/LightOffBtn';
import Nav from '../components/Nav';
import API from '../utils/API';


class Landing extends Component {
    state = {
        humidity: 65,
        temp: 68,
        soilMoisture: 30,
        isLoggedIn: false,
        lightState: 'off'
    }

    componentDidMount = () => {
        this.getSensorData();
        this.setState({isLoggedIn:true});
        this.getLightState();
    }

    getSensorData = () => {
        API.getSensorData()
        .then(response => {
            console.log(response.data);
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
            console.log(`After toggleLight, before get light state: ${this.state.lightState}`);
            this.getLightState();
            console.log(`After get light state: ${this.state.lightState}`);
        })
    }

    handleWaterButton = () => {
        API.waterPlant()
        
    }

    

    render() {
        const isLoggedIn = this.state.isLoggedIn
        return (
            
            <div className="auth-wrapper">
                <Nav isLoggedIn={isLoggedIn} />
                <div className="row" style={{margin: "0"}}>
                    <div className="auth-inner col col-sm-3" id="ContainerLeft"></div>
                    <div className="auth-inner col col-sm-5" >
                        <PlantStream/>
                        <br />
                        
                        <WaterBtn onClick={this.handleWaterButton} >Water Me</WaterBtn>
                        {
                            this.state.lightState === 'off' ? 
                            <LightOnBtn onClick={this.handleLightClick} >Turn Light On</LightOnBtn> : 
                            <LightOffBtn onClick={this.handleLightClick} >Turn Off Light</LightOffBtn>
                            
                        }
                        

                    </div >
                    <div className="auth-inner col col-sm-3" id="ContainerRight">

                     <h1 className='mt-10' >Humidity: {this.state.humidity}%</h1>
                     <h1 className='mt-10' >Soil Water Content: {this.state.soilMoisture}%</h1>
                     <h1 className='mt-10' >Temp: {this.state.temp}{'\u00b0'}</h1>
                                    
                    </div>
                </div>
            </div >
        );
    }
}

export default Landing;


