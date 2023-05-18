import React from 'react';
import './ScheduleSelector.scss';

const ScheduleSelector = (props) => {
  return (
    <div className='schedule-selector'>
      {/*  <div onClick={props.setBl} className='schedule-selector__btn'>
        Banja Luka
      </div> */}
      <div onClick={props.setNs} className='schedule-selector__btn'>
        Novi Sad
      </div>
      {/*   <div onClick={props.setVg} className='schedule-selector__btn'>
        Višegrad
      </div> */}
    </div>
  );
};

export default ScheduleSelector;
