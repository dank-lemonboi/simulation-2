import React, { Component } from "react";
import { Link }  from 'react-router-dom'

export default class Login extends Component {



  render() {
    return (
      <div className="login_container">
      <div className="login_content">
        <div className="username_input">
          <span>Username</span>
          <input onChange = { () => this.}/>
        </div>
        <div className="password_input">
          <span>Password</span>
          <input onChange = {}/>
        </div>
        <div className="login_button_container" />
        <Link to='/dashboard'><div id="login_button">Login</div></ Link>
        <Link to='/dashboard'><div id="register_button">Register</div></ Link>
        </div>
      </div>
    );
  }
}
