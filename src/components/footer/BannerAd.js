import React, { useState } from 'react';
import './BannerAd.scss';

const BannerAd = () => {
  const [bannerCode, setCode] = useState('');

  const codes = {
    1: 'berimbolo',
    2: 'triangle',
    3: 'armbar',
    4: 'spideguard',
    5: 'delariva',
    6: 'fenix',
    7: 'bjj',
    8: 'rnc',
    9: 'novisad',
    10: 'leglock',
  };

  const setCodeNum = () => {
    // Postaviti counter kako treba
    const counter = Math.floor(Math.random() * 1000);
    const codesCounter = 1 + Math.floor(Math.random() * 10);
    const bCode = codes[codesCounter] + counter;

    setCode(bCode);
  };

  return (
    <div className='banner__ad' onClick={setCodeNum}>
      <h2 className='banner__ad__head'>
        Uzmi svojih <span className='banner__ad__head__price'>10%</span> POPUSTA
      </h2>
      <h3 className='banner__ad__title'>BRAZILIAN JIU JITSU MESEC</h3>
      <p className='banner__ad__code'>Generate code on "Click" </p>
      <h4>{bannerCode === ' ' ? 'Bad code! Try Again' : bannerCode}</h4>
      <p className='banner__ad__code'>
        Uslikajte ili snimite ekran i pokažite nam na prvom treningu!
      </p>
    </div>
  );
};

export default BannerAd;
