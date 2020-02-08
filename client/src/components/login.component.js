import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
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

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
        );
    }
}