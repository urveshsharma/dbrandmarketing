import React from 'react';
import {Link} from 'react-router-dom';

import NavLink from '../global/navlink/navlink';

import logo from '../../assets/img/dbrandmarketing/logo.jpg';

import './header.scss';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light header">
                <div className="navbar-brand" >
                    <Link to='/'>
                        <img src={logo} alt='dBrandMarketing Logo'/>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navlinks" id="collapsibleNavbar">
                    <NavLink title='Home' url='/'/>
                    <NavLink title='About Us' url='/aboutUs'/>
                    <NavLink title='Services' url='/services'/>
                    <NavLink title='Register To Advertise' url='/sellerReg'/>
                    <NavLink title='Contact Us' url='/contactUs'/> 
                </div>
            </nav>
        </header>
    );
}

export default Header;