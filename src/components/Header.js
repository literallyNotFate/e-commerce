import React from 'react';
// NavLinks
import { NavLink } from 'react-router-dom';
// Styles
import '../styles/Header.css';

// Header
export default function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <NavLink to='/' exact='true'>
                    <img src='logo192.png' alt='Random Products Logo' width='150' height='150'/>
                </NavLink>
            </div>
    
            <div className='links'>
                <div>
                    <NavLink to='/about' exact='true' className='nav-link'>
                        <i class='material-icons'>group</i>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/contacts' exact='true' className='nav-link'>
                        <i class='material-icons'>contacts</i>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/feedback' exact='true' className='nav-link'>
                        <i class='material-icons'>chat</i>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
