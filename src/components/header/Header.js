import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="ema-john" />
            <div>
                <a href="/order">order</a>
                <a href="/shop">shop</a>
                <a href="/order review">order review</a>
                <a href="/about">about</a>
            </div>
        </nav>
    );
};

export default Header;