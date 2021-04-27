import React from 'react';

import './Footer.scss';
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};

export default Footer;
