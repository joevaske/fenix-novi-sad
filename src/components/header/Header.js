import React, { useState, useEffect } from 'react'
import './Header.scss';

import logo from '../../images/logo.png'
import MainMenu from '../main-menu/MainMenu';

const Header = () => {
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    return (
        <div className="header" id="header">
            <div className="logo">
                <img src={logo} alt="Fenix Team Logo" />
            </div>
            <MainMenu isSticky={`${offset > 200 ? 'sticky' : ''}`} />
            <h1 className="header__quote">Belive in <span>Yourself</span></h1>
        </div>
    )
}

export default Header
