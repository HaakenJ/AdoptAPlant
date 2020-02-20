import React, { Component } from 'react';
import API from '../utils/API';
import SubmitBtn from '../components/Buttons/SubmitBtn'
import Nav from '../components/Nav'

class UserLogin extends Component {

    // Constructor
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectTo: false,
            isLoggedIn: false
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
        API.loginUser({
            username: this.state.username,
            password: this.state.password
        }).then((dbUser) => {
            if (dbUser) {
                localStorage.setItem("username", dbUser.data.username);
                this.props.history.push('/landing');
            } else {
                alert("Username/ Password incorrect")
            }
        }).catch((error) => {
            console.log(error);
            alert("Username/ Password incorrect")
        });
    }
    

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            
            <div className="auth-wrapper">
                <Nav isLoggedIn={isLoggedIn} />
                <div className="auth-inner login-box">
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

                        <SubmitBtn onClick={this.handleSubmit}>Log In</SubmitBtn>


                    </form>
                </div>
            </div>
        );
    }
}


export default UserLogin;
