import React, { Component } from 'react';
import logo from "../images/CBP-Logo-Web.png"

class Welcome extends Component {
    state = {}
    componentDidMount = () => {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner" style={{ margin: "auto", width: "457px" }}>
                    <div className='Welcomebox'>
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <br />
                        <h3>Welcome to Adopt-A-Plant</h3>
                        <p>Bringing the garden to you, one plant at a time</p>
                        <br />

                        <a href="/log-in" className="btn btn-primary btn-flex" role="button">Log In</a>
                        <a href="/sign-up" className="btn btn-primary btn-flex newuser" role="button">Sign Up</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
