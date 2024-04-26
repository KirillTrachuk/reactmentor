import React, { useState, useRef, useEffect } from 'react';
import "../css/header.css";

const Header = () => {
    return(
        <header className='header'>
            <div className="header-left">
                <div className="header-menu">
                    <img src="../images/header/burger_menu.svg" alt="menu" />
                </div>
                <a href="#">
                    <img src="../images/header/logo.svg" alt="logo" />
                </a>
            </div>
            <div className="header-right">
                <a href="tel:+15471258965" className="phone">
                    <img src="../images/header/smartphone.svg" alt="" />
                    <p>+1 547 125 89 65</p>
                </a>
                <a href="#" className="big-button">
                    Get a quote
                </a>
            </div>
        </header>
    )
}
export default Header;