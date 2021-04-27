import React, { useState } from 'react';
import './BannerAd.scss';

const BannerAd = () => {
  const [bannerCode, setCode] = useState('');

  const codes = {
    1: 'meow',
    2: 'woof',
    3: 'moo',
    4: 'baaah',
    5: 'tweet',
    6: 'fenix',
    7: 'bjj',
    8: 'banjaluka',
    9: 'novisad',
    10: 'visegrad',
  };

  const setCodeNum = () => {
    // Postaviti counter kako treba
    const counter = Math.floor(Math.random() * 1000);
    const codesCounter = 1 + Math.floor(Math.random() * 10);
    const bCode = codes[codesCounter] + counter;

    setCode(bCode);
  };

  return (
    <div className='banner-ad' onClick={setCodeNum}>
      <h2 className='banner-ad__head'>
        Uzmi svojih <span className='banner-ad__head__price'>10%</span> POPUSTA
      </h2>
      <h3 className='banner-ad__title'>BRAZILIAN JIU JITSU MESEC</h3>
      <p className='banner-ad__code'>Generate code on "Click" </p>
      <h4>{bannerCode === ' ' ? 'Bad code! Try Again' : bannerCode}</h4>
      <p className='banner-ad__code'>
        Uslikajte ili snimite ekran i pokažite nam na prvom treningu!
      </p>
    </div>
  );
};

export default BannerAd;
