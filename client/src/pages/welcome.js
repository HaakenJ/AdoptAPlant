import React, { Component } from 'react';
import logo from "../images/CBP-Logo-Web.png"
import SubmitBtn from '../components/Buttons/SubmitBtn'

class Welcome extends Component {
    state = {}
    componentDidMount = () => {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner" style={{ margin: "auto", width: "457px" }}>
                    <div className='Welcomebox'>
                        <img src={logo} alt="plogo" className="logo" />
                        <br />
                        <h3>Welcome to Adopt-A-Plant</h3>
                        <p>Bringing the garden to you, one plant at a time</p>
                        <br />

                        <a href="/log-in"><SubmitBtn>Log In</SubmitBtn></a>
                        <a href="/sign-up"><SubmitBtn>Sign Up</SubmitBtn></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
