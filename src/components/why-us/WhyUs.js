import React from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { GiPriceTag, GiSportMedal } from 'react-icons/gi';
import whyUsImage from '../../images/djordje-stefan.png';

import './WhyUs.scss';

const WhyUs = () => {
  return (
    <div className='why-us'>
      <div className='why-us__container'>
        <h2>Zašto izabrati nas?</h2>
        <p>
          Sve polaznike motivišemo da se u zajedničkom radu međusobno
          podržavaju, pomažu i dele znanje i tehnike, jer time jačamo jedinstvo,
          stvaramo prijatnu atmosferu i uveliko poboljšavamo sisteme učenja i
          razvoja talenta pojedinca. Naša vrata su uvek otvorena kako za
          apsolutne početnike, tako i za iskusne sportiste ili veterane.
        </p>
        <p>
          Naša vizija je stvaranje vrhunskih sportista i zdravih pojedinaca,
          članova našeg društva kroz sportske aktivnosti!
        </p>
        <p>VAŠ LIČNI USPEH JE NAŠE ZADOVOLJSTVO! PRIDRUŽITE NAM SE!</p>
        <div className='line'></div>
        <div className='why-us__container__row'>
          <h3>
            <AiOutlineHistory className='icon' />
            10 GODINA POSTOJANJA
          </h3>
          <p>Fenix akademija je osnovana 2011. godine.</p>
        </div>
        <div className='why-us__container__row'>
          <h3>
            <GiPriceTag className='icon' />
            POVOLJNA CENA
          </h3>
          <p>Za samo 25 EUR dobijate 20-25 treninga mesečno.</p>
        </div>
        <div className='why-us__container__row'>
          <h3>
            <GiSportMedal className='icon' />
            SPORTSKA ATMOSFERA
          </h3>
          <p>
            Pridružujete se organizaciji čiji se članovi međusobno podupiru i
            rade u vrhunskoj sportskoj atmosferi!
          </p>
        </div>
      </div>
      <div className='why-us__image'>
        <img src={whyUsImage} alt='' />
      </div>
    </div>
  );
};

export default WhyUs;
