import React, { Component } from 'react';
import { relative } from 'path';


class Landing extends Component {
    state = {}
    componentDidMount = () => {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="row">
                    <div className="auth-inner col col-sm-3"></div>
                    <div className="auth-inner col col-sm-4">
                        <img src="http://adoptaplant.hopto.org:8081/" style={{ height: "80%", width: "80%", marginBottom: "25px" }} />
                        <br />
                        <button type="submit" className=" btn btn-primary" id="water - btn">Water Plant</button >
                    </div >
                    <div className="auth-inner col col-sm-3"></div>
                </div>
            </div >
        );
    }
}

export default Landing;
