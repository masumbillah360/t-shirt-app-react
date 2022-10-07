import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='link-container'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    );
};

export default Header;