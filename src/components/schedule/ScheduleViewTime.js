import React, { Fragment } from 'react';
import './ScheduleViewTime.scss';

const ScheduleViewTime = ({ times }) => {
  return (
    <div className='schedule-view__time'>
      {times.map((time) => (
        <Fragment key={time.name}>
          <p>
            {time.name}
            <span>- {time.desc} -</span>
          </p>
          <p className='schedule-view__time-count'>{time.time}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default ScheduleViewTime;
