import React from 'react';

import SocialLinks from '../main-menu/SocialLinks';

import './FollowUs.scss';

const FollowUs = () => {
  return (
    <div className='follow-us'>
      <h3>Zapratite nas:</h3>
      <ul className='follow-us__social'>
        <SocialLinks />
      </ul>
    </div>
  );
};

export default FollowUs;
