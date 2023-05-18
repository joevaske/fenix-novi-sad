import React from 'react';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-bottom'>
      <p>&copy; FENIX BJJ ACADEMY - {currentYear} | Created by CodeArt</p>
    </div>
  );
};

export default FooterBottom;
