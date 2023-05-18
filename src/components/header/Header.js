import React, { useState, useEffect } from 'react';
import './Header.scss';

import logo from '../../images/logo.png';
import MainMenu from '../main-menu/MainMenu';

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className='header' id='header'>
      <div className='logo'>
        <img src={logo} alt='Fenix Team Logo' />
      </div>
      <MainMenu isSticky={`${offset > 200 ? 'sticky' : ''}`} />
      <h1 className='header__quote'>
        Veruj u <span>Sebe</span>
        <p>Vaš lični uspeh je naše zadovoljstvo! Pridružite nam se!!!</p>
      </h1>
      {/*
            
              <h4 className="header__quote header__subquote">never about to quit</h4>
            */}
    </div>
  );
};

export default Header;
