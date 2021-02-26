import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';



import { CgMenuRightAlt } from 'react-icons/cg'
import { ImWhatsapp } from 'react-icons/im'

import './MainMenu.scss'
import SocialLinks from './SocialLinks';


const MainMenu = ({ isSticky }) => {
    const [menuToggle, setToggle] = useState(false);


    return (
        <nav className={`main-menu `} >
            <div className={`main-menu__icon ${menuToggle === true ? "active" : ""}`}>
                <CgMenuRightAlt onClick={() => setToggle(!menuToggle)} />
            </div>
            <div className="main-menu__phone">
                <ImWhatsapp />
            </div>

            <ul className={`main-menu__links ${menuToggle === true ? "active" : ""} ${isSticky}`} >
                <li><Link to="/#header">Home</Link></li>
                <li><Link to="/#about">About us</Link></li>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/#services">News</Link></li>
                <li><Link to="/#gallery">Gallery</Link> </li>
                <li><Link to="/#gallery">Contact</Link> </li>
            </ul>
            <ul className={`main-menu__social ${isSticky}`} >
                <SocialLinks />
            </ul>
        </nav>
    )
}

export default MainMenu
