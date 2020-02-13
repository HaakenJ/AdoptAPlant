import React, { Component } from 'react';
import API from '../utils/API';
import SubmitBtn from '../components/Buttons/SubmitBtn'

class UserLogin extends Component {

    // Constructor
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectTo: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    // Sets state values for form elements email, username, password.
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    // Login handler. Sends username and password to /log-in route. On success redirects to /landing. 
    handleSubmit(event) {
        event.preventDefault();
        API.loginUser(JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })).then((dbUser) => {
            if (dbUser) {
                this.props.history.push('/landing');
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    handleFacebookLogin(event) {
        event.preventDefault();
        API.loginFacebook()
    }

    render() {
        return (
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=1032537077124166&autoLogAppEvents=1"></script>
            <div className="auth-wrapper">
                <div className="auth-inner" style={{margin: "auto", width: "457px"}}>
                    <form>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="username" className="form-control" placeholder="Enter Username" 
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </div>


                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>

                        <SubmitBtn>Log In</SubmitBtn>
                    </form>
                </div>
            </div>
        );
    }
}


export default UserLogin;
