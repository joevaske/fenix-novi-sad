import React from 'react'
import './Header.scss';

import logo from '../../images/logo.png'
import MainMenu from '../main-menu/MainMenu';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Fenix Team Logo" />
            </div>
            <MainMenu />
            <h1 className="header__quote">Belive in <span>Yourself</span></h1>
        </div>
    )
}

export default Header
