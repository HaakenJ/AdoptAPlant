import React, { Component } from 'react';
import { relative } from 'path';
import PlantStream from '../components/PlantStream'
import WaterBtn from '../components/Buttons/WaterBtn'


class Landing extends Component {
    state = {}

    componentDidMount = () => {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="row" style={{margin: "0"}}>
                    <div className="auth-inner col col-sm-3"></div>
                    <div className="auth-inner col col-sm-5" >
                        <PlantStream/>
                        <br />
                        <WaterBtn>Water Me</WaterBtn>
                    </div >
                    <div className="auth-inner col col-sm-3"></div>
                </div>
            </div >
        );
    }
}

export default Landing;
