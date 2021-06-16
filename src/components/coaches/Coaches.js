import React from 'react';
import './Coaches.scss';
import Coach from './Coach';

import { coaches } from './coaches-info';

const Coaches = () => {
  return (
    <div className='coaches'>
      <h2>Treneri</h2>
      <div className='coaches__container'>
        {coaches.map((coach) => (
          <Coach key={coach.id} coach={coach} />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
