import React, { Component } from 'react';
import Nav from '../components/Nav'

class NotFound extends Component {
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
                <div className="auth-inner" style={{ margin: "auto", width: "457px" }}>
                    <h1>404 Page Not Found</h1>
                    <h1>
                        <span role="img" aria-label="Face With Rolling Eyes Emoji">
                            🙄
                        </span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default NotFound;
