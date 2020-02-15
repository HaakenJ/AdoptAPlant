import React, { Component } from 'react';
import PlantStream from '../components/PlantStream';
import WaterBtn from '../components/Buttons/WaterBtn';
import LightBtn from '../components/Buttons/LightBtn';
import API from '../utils/API';


class Landing extends Component {
    state = {
        humidity: 65,
        temp: 68,
        soilMoisture: 30
    }
    componentDidMount = () => {
        this.getSensorData();
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

    render() {
        return (
            <div className="auth-wrapper">
                <div className="row" style={{margin: "0"}}>
                    <div className="auth-inner col col-sm-3" id="ContainerLeft"></div>
                    <div className="auth-inner col col-sm-5" >
                        <PlantStream/>
                        <br />
                        <WaterBtn>Water Me</WaterBtn>
                        <LightBtn>Light Me</LightBtn>
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

