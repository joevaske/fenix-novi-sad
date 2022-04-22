import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { GiSlashedShield, GiStrong } from 'react-icons/gi';

import AboutForm from './AboutForm';

import './About.scss';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__desc'>
        <h2>Dobrodošli </h2>
        <p>
          Fenix BJJ Academy pruža vrhunski ambijent i uslove u kojima vežbači
          bez obzira na prethodno iskustvo, godine ili kondiciju, izučavaju
          principe borbe, pre svega brazilske džiudžice, greplinga i MMA.
        </p>
        <p>
          Takođe nudimo prilagođene programe samoodbrane u okviru brazilske
          džiudžice.
        </p>
        <div className='line' />
        <div className='about__desc__benefits'>
          <div className='benefit'>
            <h3>
              <FaHeartbeat className='benefit__icon' />
              Kondicija
            </h3>
            <p>
              BJJ borci važe za jedne od najsuperiornijih i najobučenijih boraca
              današnjice!
            </p>
          </div>
          <div className='benefit'>
            <h3>
              <GiSlashedShield className='benefit__icon' />
              Samoodbrana
            </h3>
            <p>Sposobni su da se odbrane u svakoj situaciji!</p>
          </div>
          <div className='benefit'>
            <h3>
              <GiStrong className='benefit__icon' />
              Samopouzdanje
            </h3>
            <p>
              Što u velikoj meri poboljšava kvalitet života na svim nivoima!
            </p>
          </div>
        </div>
      </div>
      <div className='about__form'>
        <AboutForm />
      </div>
    </div>
  );
};

export default About;
