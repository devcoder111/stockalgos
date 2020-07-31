import React, { Component } from 'react';
import logo from '../assets/logo.png';
import AuthBackground from '../components/AuthBackground/AuthBackground';
import { NavLink } from 'react-router-dom';

class SignUpPage extends Component {
    onSubmit = e => {
        e.preventDefault();
        
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
                    <form onSubmit={this.onSubmit}>
                        <div className='__flex __mtb--1'>
                            <input name='firstName' placeholder='Frrst Name' className='__input-field __mr-1' />
                            <input name='lastName' placeholder='Last Name' className='__input-field' />
                        </div>
                        <input name='email' type='text' className='__input-field' placeholder='Email' />
                        <input name='username' type='text' className='__input-field' placeholder='Create a username' />
                        <input type='password' name='password' type='text' className='__input-field' placeholder='Create a password' />
                        <input name='confirmPassword' type='password' className='__input-field' placeholder='Re-enter a password' />
                        <button className='__btn __mt-3'>Sign Up</button>
                    </form>
                </div>
                <AuthBackground />
            </div>
        )
    }
}

export default SignUpPage;