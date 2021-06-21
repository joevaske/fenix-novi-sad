import React from 'react';

import { ImWhatsapp } from 'react-icons/im';
import { FaInstagram, FaViber, FaFacebookSquare } from 'react-icons/fa';
import { RiPhoneLine } from 'react-icons/ri';

const SocialLinks = () => {
  return (
    <>
      <li>
        <a
          href='https://www.instagram.com/fenix_bjjacademy/'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href='https://www.facebook.com/FenixBJJAcademy'
          aria-label='Facebook'
        >
          <FaFacebookSquare />
        </a>
      </li>
      <li>
        <a
          href='https://wa.me/381638218306'
          rel='noopener noreferrer'
          aria-label='Whatsapp'
        >
          <ImWhatsapp />
        </a>
      </li>
      <li>
        <a href='viber://chat?number=+381638218306'>
          <FaViber />
        </a>
      </li>
      <li>
        <a href='tel:00381638218306' aria-label='Telehone'>
          <RiPhoneLine />
        </a>
      </li>
    </>
  );
};

export default SocialLinks;
