import React from 'react'


import { ImWhatsapp } from 'react-icons/im'
import { FaInstagram, FaViber } from 'react-icons/fa'
import { RiFacebookBoxFill, RiPhoneLine } from 'react-icons/ri'

const SocialLinks = () => {
    return (
        <>
            <li><a href="https://www.instagram.com/fenix_bjjacademy/" aria-label="Instagram"><FaInstagram /></a></li>
            <li><a href="https://www.facebook.com/FenixBJJAcademy" aria-label="Facebook"><RiFacebookBoxFill /></a></li>
            <li><a
                href="https://wa.me/381638218306"
                rel="noopener noreferrer"
                aria-label="Whatsapp"

            ><ImWhatsapp /></a></li>
            <li><a href="+381638218306" aria-label="Viber"><FaViber /></a></li>
            <li><a href="tel:00381638218306" aria-label="Telehone"><RiPhoneLine /></a></li>
        </>
    )
}

export default SocialLinks
