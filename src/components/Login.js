import React, { Component } from "react";
import { Link }  from 'react-router-dom'
import axios from 'axios'
import { updateUsername, updatePassword, getUsers } from '../ducks/reducer'
import { connect } from 'react-redux'

class Login extends Component {


 componentDidMount() {
   axios.get('/api/users').then( res => {
     console.log(res.data)
     this.props.getUsers({users: res.data})
   })
 }



 newUser() {
   axios.post('/api/auth/register', {username: this.props.username, password: this.props.password})
 }

 loginSession() {
   axios.post('/api/auth/login', {username: this.props.username, password: this.props.password}).then(res => {
     console.log(res.data)
   })
 }


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
        <Link to='/dashboard'><div id="login_button" onClick={ () => this.loginSession() }>Login</div></ Link>
        <Link to='/dashboard'><div id="register_button" onClick={ () => this.newUser() }>Register</div></ Link>
        </div>
      </div>
    );
  }
}
    function mapStateToProps( state )  {
      return {
        username: state.username,
        password: state.password,
        users: state.users
      }
        }
  export default connect(mapStateToProps, { updateUsername, updatePassword, getUsers })(Login)
