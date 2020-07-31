import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import URL from 'url-parse';
import { AppContext } from '../App';
import './login.scss'
import logo from '../assets/logo.png';
import AuthBackground from '../components/AuthBackground/AuthBackground';
import { NavLink, Link } from 'react-router-dom';

class Login_Container extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = AppContext;
  render() {
    return (
      <Login
        {...this.props}
        {...this.context} />
    )
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: new URL(window.location.href, true),
    }
  }

  handleSignIn = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    axios.post('/sign_in', { username: username.value, password: password.value })
      .then((response) => {
        console.log(response)
        this.props.persistUser(response.data.result)
      })
  }


  render() {
    return (
      <div className='__auth-Page __flex-stretch'>
        <div className='__auth-wrapper'>
          <img src={logo} alt='' className='__logo __mb-4' />
          <div className='__mb-2'>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup' className='__ml-1'>Sign Up</NavLink>
          </div>
          <form onSubmit={this.handleSignIn}>
            <input name='username' type='text' className='__input-field' placeholder='Email or username' />
            <input name='password' type='password' className='__input-field' placeholder='Password' />
            <Link to='/forgot-password' className='__mt-1 __mb-2 __forgot-password __grey-text'>Forgot your password</Link>
            <button className='__btn'>Login</button>
          </form>
        </div>
        <AuthBackground />
      </div>
    )
  }
}

Login_Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Login_Container;