import React, { Component } from 'react';


class Landing extends Component {
    state = {}
    componentDidMount = () => {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner" style={{ width:"auto",margin: "20px" }}>
                    <div className="container-fluid">
                            <div className="embed-responsive embed-responsive-21by9">
                                <iframe src="http://71.227.154.20:8081" className="embed-responsive-item" title="myFrame">
                                    Video Feed for the Plant
                                </iframe>
                            </div>
                        <br />
                        
                            <button
                                type="submit"
                                className=" btn btn-primary"
                                id="water - btn">
                                Water Plant
                            </button >
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
