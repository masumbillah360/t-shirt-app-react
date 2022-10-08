import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='link-container rounded-b'>
            <NavLink to='/'
            className={({ isActive }) =>
            isActive ? 'nav-link' : undefined}
            >Home</NavLink>

            <NavLink to='/orders'
            className={({ isActive }) =>
            isActive ? 'nav-link' : undefined}
            >Orders</NavLink>

            <NavLink to='/about'
            className={({ isActive }) =>
            isActive ? 'nav-link' : undefined}
            >About</NavLink>
        </div>
    );
};

export default Header;