import React, { Fragment } from 'react';
import ScheduleViewTime from './ScheduleViewTime';
import './ScheduleView.scss';

const ScheduleView = ({ schedule, active }) => {
  console.log(schedule);
  return (
    <>
      {schedule.map((schedul) => (
        <div
          className={active ? 'active schedule-view' : 'schedule-view'}
          key={schedul.name}
        >
          <h3>{schedul.name}</h3>
          <ScheduleViewTime times={schedul.times} />
        </div>
      ))}
    </>
  );
};

export default ScheduleView;
