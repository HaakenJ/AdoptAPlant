import React from "react";
import "./style.css"
import logo from "../../images/CBP-Logo-Web.png"

function Nav(props) {

  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />HOME</a>
        <div className="navbar-expand" id="navbarContent">
          {props.isLoggedIn ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/myaccount">My Account</a>
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
