import React, {Component} from 'react';
import API from '../utils/API';
import SubmitBtn from '../components/Buttons/SubmitBtn'

class Signup extends Component {
    // Constructor
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
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
        return (
            <div className="auth-wrapper">
                <div className="auth-inner" style={{
                    margin: "auto", width: "457px" }}>
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

                <SubmitBtn>Sign Up</SubmitBtn>

                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;