import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { CgMenuRightAlt } from 'react-icons/cg';
import { ImWhatsapp } from 'react-icons/im';

import './MainMenu.scss';
import SocialLinks from './SocialLinks';

const MainMenu = ({ isSticky }) => {
  const [menuToggle, setToggle] = useState(false);

  return (
    <nav className={`main-menu `}>
      <div className={`main-menu__icon ${menuToggle === true ? 'active' : ''}`}>
        <CgMenuRightAlt onClick={() => setToggle(!menuToggle)} />
      </div>
      <div className='main-menu__phone'>
        <ImWhatsapp />
      </div>

      <ul
        className={`main-menu__links ${
          menuToggle === true ? 'active' : ''
        } ${isSticky}`}
      >
        <li>
          <Link to='/#header'>Naslovna</Link>
        </li>
        <li>
          <Link to='/#about'>O nama</Link>
        </li>
        <li>
          <Link to='/#services'>Usluge</Link>
        </li>
        <li>
          <Link to='/#news'>Novosti</Link>
        </li>
        <li>
          <Link to='/#gallery'>Galerija</Link>{' '}
        </li>
        <li>
          <Link to='/#gallery'>Kontakt</Link>{' '}
        </li>
      </ul>
      <ul className={`main-menu__social ${isSticky}`}>
        <SocialLinks />
      </ul>
    </nav>
  );
};

export default MainMenu;
