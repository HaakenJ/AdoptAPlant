import React, { Component } from 'react';
import PlantStream from '../components/PlantStream'
import WaterBtn from '../components/Buttons/WaterBtn'
import LightBtn from '../components/Buttons/LightBtn'
import Nav from '../components/Nav'
import API from '../utils/API'


class Landing extends Component {
    state = {
        humidity: 65,
        temp: 68,
        soilMoisture: 30,
      isLoggedIn: false
    }
    componentDidMount = () => {
        this.getSensorData();
      this.setState({isLoggedIn:true});
    }
    getSensorData = () => {
        API.getSensorData()
        .then(data => {
            this.setState({
                humidity: data.humidity,
                temp: data.temp,
                soilMoisture: data.soilMoisture
            })
        })
        .catch(err => {
            console.log(`Error with firebase: ${err}`);
        })
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
                        <WaterBtn>Water Me</WaterBtn>
                        <LightBtn>Light Me</LightBtn>
                    </div >
                    <div className="auth-inner col col-sm-3" id="ContainerRight">

                     Humidity: {this.state.humidity}%
                     Soil Water Content: {this.state.soilMoisture}%
                     Temp: {this.state.temp}&#8457
                                    
                    </div>
                </div>
            </div >
        );
    }
}

export default Landing;

