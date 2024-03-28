import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Coach = ({ coach }) => {
  return (
    <div className={`coach coach-${coach.id}`}>
      <div className='coach__image'>
        <img src={coach.src} alt='' />
      </div>
      <h2 className='coach__name'> {coach.name}</h2>
      <p className='coach__role'>{coach.role}</p>

      <div className='coach__social'>
        <div className='coach__social__icon'>
          <a
            href={coach.insta}
            aria-label='Instagram'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </div>
        <div className='coach__social__icon'>
          <a
            href={coach.face}
            aria-label='Facebook'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Coach;
