import React from 'react'


import { ImWhatsapp } from 'react-icons/im'
import { FaInstagram, FaViber } from 'react-icons/fa'
import { RiFacebookBoxFill, RiPhoneLine } from 'react-icons/ri'

const SocialLinks = () => {
    return (
        <>
            <li><a href="https://www.instagram.com/fenix_bjjacademy/"><FaInstagram /></a></li>
            <li><a href="https://www.facebook.com/FenixBJJAcademy"><RiFacebookBoxFill /></a></li>
            <li><a
                href="https://wa.me/381638218306"
                rel="noopener noreferrer"

            ><ImWhatsapp /></a></li>
            <li><a href="+381638218306"><FaViber /></a></li>
            <li><a href="tel:00381638218306"><RiPhoneLine /></a></li>
        </>
    )
}

export default SocialLinks
