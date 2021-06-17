import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Location = ({ addr }) => {
  return (
    <div>
      <div className='location'>
        <h3>{addr.name}</h3>
        <h4>{addr.street}</h4>
        <h4 className='location__tel'> {addr.phone} </h4>
        <div className='location__phone'>
          <a
            href={`tel:${addr.phone.replace(/\s/g, '')}`}
            aria-label='Telehone'
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;
