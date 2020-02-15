import React, { Component } from 'react';
import { relative } from 'path';
import PlantStream from '../components/PlantStream'
import WaterBtn from '../components/Buttons/WaterBtn'
import LightBtn from '../components/Buttons/LightBtn'
import Nav from '../components/Nav'


class Landing extends Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount = () => {
        this.setState({isLoggedIn:true})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        return (
            
            <div className="auth-wrapper">
                <Nav isLoggedIn={isLoggedIn} />
                <div className="row" style={{margin: "0"}}>
                    <div className="auth-inner col col-sm-3"></div>
                    <div className="auth-inner col col-sm-5" >
                        <PlantStream/>
                        <br />
                        <WaterBtn>Water Me</WaterBtn>
                        <LightBtn>Light Me</LightBtn>
                    </div >
                    <div className="auth-inner col col-sm-3"></div>
                </div>
            </div >
        );
    }
}

export default Landing;
