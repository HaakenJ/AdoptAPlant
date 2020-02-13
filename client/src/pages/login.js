import React, { Component } from 'react';
import SubmitBtn from '../components/Buttons/SubmitBtn'

class UserLogin extends Component {
    state = {}
    componentDidMount = () => {
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner" style={{margin: "auto", width: "457px"}}>
                    <form>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="username" className="form-control" placeholder="Enter Username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <SubmitBtn>Log In</SubmitBtn>

                    </form>
                </div>
            </div>
        );
    }
}


export default UserLogin;
