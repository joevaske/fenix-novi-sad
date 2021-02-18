import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';


import { CgMenuRightAlt } from 'react-icons/cg'
import { ImWhatsapp } from 'react-icons/im'
import { FaInstagram, FaViber } from 'react-icons/fa'
import { RiFacebookBoxFill, RiPhoneLine } from 'react-icons/ri'

import './MainMenu.scss'


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
                <li><a href="#">News</a></li>
                <li><a href="#">Gallery</a> </li>
                <li><a href="#">Contact</a> </li>
            </ul>
            <ul className={`main-menu__social ${isSticky}`} >
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><RiFacebookBoxFill /></a></li>
                <li><a href="#"><ImWhatsapp /></a></li>
                <li><a href="#"><FaViber /></a> </li>
                <li><a href="#"><RiPhoneLine /></a> </li>
            </ul>
        </nav>
    )
}

export default MainMenu
