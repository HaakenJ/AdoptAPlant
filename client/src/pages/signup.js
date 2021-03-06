import React, { Component } from 'react';
import API from '../utils/API';
import SubmitBtn from '../components/Buttons/SubmitBtn'
import Nav from '../components/Nav'

class Signup extends Component {
    // Constructor
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
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

    // Sign-up handler. Sends email, username, and password to /sign-up route. On success redirects to /log-in. 
    handleSubmit = (event) => {
        event.preventDefault();
        API.createUser({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }).then((dbUser) => {
            if (dbUser) {
                this.props.history.push('/log-in');
            } else {
                console.log('Username is already taken.')
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            
            <div className="auth-wrapper">
                <Nav isLoggedIn={isLoggedIn} />
                <div className="auth-inner login-box">
                    <form>
                        <h3>Create User</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="Username" className="form-control" placeholder="Enter username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                name="email"
                                value={this.state.email}
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

                        <SubmitBtn
                            onClick={this.handleSubmit}
                        >Sign Up
                        </SubmitBtn>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;