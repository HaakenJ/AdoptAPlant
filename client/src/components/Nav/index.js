import React from "react";
import "./style.css"
import logo from "../../images/CBP-Logo-Web.png"
import API from "../../utils/API";

const handleLogOutClick = () => {
  API.logOutUser()
  .then(() => {
      localStorage.clear();
  })
  .catch(err => {
      console.log(`There was an error logging out: ${err}`);
  })
}

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top">
      <div className="container">
        {props.isLoggedIn ? (
          <a className="navbar-brand" href="/landing">
            <img src={logo} alt="logo" />HOME</a>
        ): (
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />HOME</a>
        )}
        <div className="navbar-expand" id="navbarContent">
          {props.isLoggedIn ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/myaccount">{localStorage.getItem("username") ? 
                `${localStorage.getItem("username")}'s`: 
                "My"} Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={handleLogOutClick}>Log Out</a>
              </li>
            </ul>
          ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/landing">Guest Access</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/log-in">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sign-up">Sign up</a>
                </li>
              </ul>
            )}
        </div>
      </div>
    </nav>
  )
}

export default Nav;
