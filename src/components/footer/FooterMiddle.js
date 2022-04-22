import React from 'react';
import BannerAd from './BannerAd';
import FollowUs from './FollowUs';
import OurContacts from './OurContacts';
import WorkingHours from './WorkingHours';

const FooterMiddle = () => {
  return (
    <div className='footer-middle'>
      <OurContacts />
      <WorkingHours />
      <BannerAd />
      <FollowUs />
    </div>
  );
};

export default FooterMiddle;
