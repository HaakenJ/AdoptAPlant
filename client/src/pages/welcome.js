import React, { Component } from 'react';
import logo from "../images/CBP-Logo-Web.png"
import SubmitBtn from '../components/Buttons/SubmitBtn'
import Nav from '../components/Nav'

class Welcome extends Component {
    state = {
        isLoggedIn: true
    }
    componentDidMount = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="auth-wrapper">
                <Nav isLoggedIn={isLoggedIn} />
                <div className="auth-inner login-box">
                    <div className='Welcomebox'>
                        <img src={logo} alt="plogo" className="logo" />
                        <br />
                        <h3 className="title-text">Welcome to Adopt-A-Plant</h3>
                        <p className="title-subtext">Bringing the garden to you, one plant at a time</p>
                        <br />

                        <div className="welcome-btn-container">
                            <a href="/log-in"><SubmitBtn className="welcome-btn">Log In</SubmitBtn></a>
                            <a href="/sign-up"><SubmitBtn className="welcome-btn">Sign Up</SubmitBtn></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
