import React, { Component } from 'react';

class Landing extends Component {
    state = {}
    componentDidMount = () => {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner" style={{ margin: "20px" }}>
                    <div className="container-fluid">
                        <div className="row justify-content-md-center">
                            <div className="col col-md-3" id="containerLeft">col-md-4</div>
                            <div className="col col-md-auto">
                                <iframe src="" title="myFrame">
                                    Video Feed for the Plant
                                </iframe >
                            </div>
                            <div className="col col-md-3" id="containerRight">
                                col-md-4
                                </div>
                        </div>
                        <br />
                        <div className="row justify-content-md-center">
                            <button
                                type="submit"
                                className=" btn btn-primary"
                                id="water - btn">
                                Water Plant
                            </button >
                        </div >
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
