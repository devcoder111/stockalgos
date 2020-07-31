import React, { Component } from 'react';
import './SideBar.scss';
import logo from '../../assets/white-logo.png';
import defaultUser from '../../assets/User Icon.svg';
import { NavLink } from 'react-router-dom';
import MyAccount from '../../icons/MyAccount';
import MarketplaceIcon from '../../icons/MarketplaceIcon';
import Basket from '../../icons/Basket';
import SellAlgoIcon from '../../icons/SellAlgoIcon';
import MyAlgosIcon from '../../icons/MyAlgosIcon';
import SupportIcon from '../../icons/SupportIcon';
import LogOutIcon from '../../icons/LogOutIcon';

class SideBar extends Component {
    render() {
        return (
            <div className='__SideBar-Wrapper'>
                <div className='__SideBar __col __scrollbar'>

                    <img src={logo} alt='' className='__main-logo  __mt-25 __ml-a __mr-a' />
                    
                    <div className='__flex-center __flex __mb-25 __mt-25'>
                        <img src={defaultUser} alt='' className='__default-user __mr-1' />
                        <div>
                            <div className='__h4'>Hello John</div>
                            <div className='__sub-title __seconday-text'>@johnsmith123</div>
                        </div>
                    </div>

                    <NavLink exact to='/'><MyAccount /> My Account</NavLink>

                    <div className='__ml-3 __mt-2 __sub-title __seconday-text __mb-1'>Buy Algos</div>
                    <NavLink to='/marketplace'> <MarketplaceIcon className='__mediam-icon' /> Marketplace</NavLink>
                    <NavLink to='/my-purcheses'><Basket /> My Purcheses</NavLink>
                    
                    <div className='__ml-3 __mt-2 __seconday-text __sub-title __mb-1'>Sell Algos</div>
                    <NavLink to='/sellalgo'><SellAlgoIcon /> Sell An Algo</NavLink>                    
                    <NavLink to='/myalgos' className='__mb-4'><MyAlgosIcon /> My Algos</NavLink>

                    <NavLink to='/help' className='__mt-a'><SupportIcon />Help & Support</NavLink>
                    <NavLink to='/logout'><LogOutIcon />Log Out</NavLink>
                </div>
            </div>
        )
    }
}

export default SideBar;