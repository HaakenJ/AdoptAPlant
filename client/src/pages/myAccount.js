import React, { Component } from 'react';
import API from '../utils/API';
import SubmitBtn from '../components/Buttons/SubmitBtn'
import Nav from '../components/Nav'

class MyAccount extends Component {

    // Constructor
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoggedIn: true
        }
        this.handleSubmit1 = this.handleSubmit1.bind(this)
        this.handleSubmit2 = this.handleSubmit2.bind(this)
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

    handleSubmit1(event) {
        event.preventDefault();
        API.updateEmail(JSON.stringify({
            email: this.state.email
        })).then((dbUser) => {
            if (dbUser) {
                this.props.history.push('/myaccount');
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    handleSubmit2(event) {
        event.preventDefault();
        API.updatePassword(JSON.stringify({
            password: this.state.password
        })).then((dbUser) => {
            if (dbUser) {
                this.props.history.push('/myaccount');
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
                    <h3>Update My Info</h3>
                    <form>
                        
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter Email Address"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <SubmitBtn onClick={this.handleSubmit1}>Update</SubmitBtn>


                    </form><br/>
                    <form>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter New Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <SubmitBtn onClick={this.handleSubmit2}>Update</SubmitBtn>


                    </form>
                </div>
            </div>
        );
    }
}


export default MyAccount;
