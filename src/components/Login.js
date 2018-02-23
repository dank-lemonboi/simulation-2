import React, { Component } from "react";
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUsername, updatePassword } from '../ducks/reducer'

class Login extends Component {
  render() {
    return (
      <div className="login_container">
      <div className="login_content">
        <div className="username_input">
          <span>Username</span>
          <input onChange = { (e) => this.props.updateUsername(e.target.value)}/>
        </div>
        <div className="password_input">
          <span>Password</span>
          <input onChange = { (e) => this.props.updatePassword(e.target.value)}/>
        </div>
        <div className="login_button_container" />
        <Link to='/dashboard'><div id="login_button">Login</div></ Link>
        <Link to='/dashboard'><div id="register_button">Register</div></ Link>
        </div>
      </div>
    );
  }
}
    function mapStateToProps( state)  {
      return {
        username: state.username,
        password: state.password
      }
        }
  export default connect(mapStateToProps, { updateUsername, updatePassword })(Login)
