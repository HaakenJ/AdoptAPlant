import React, {Component} from 'react';
import SubmitBtn from '../components/Buttons/SubmitBtn'

class Signup extends Component {
    state = {}
    componentDidMount = () => {
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
                    <input type="Username" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <SubmitBtn>Sign Up</SubmitBtn>

            </form>
            </div>
            </div>
        );
    }
}

export default Signup;