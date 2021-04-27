import React, { useState } from 'react';
import ScheduleSelector from './ScheduleSelector';
import ScheduleView from './ScheduleView';

import './Schedule.scss';

const Schedule = () => {
  const [town, setTown] = useState('');
  const [schedule, setShedule] = useState('');
  const [activeClass, setActiveClass] = useState(false);

  const scheduleBL = [
    {
      name: 'Monday',
      times: [{ name: 'Odrasli BJJ', time: '20:00 - 21:30' }],
    },
    {
      name: 'Thuesday',
      times: [
        { name: 'Kids BJJ', time: '18:00 - 19:00' },
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Wendsday',
      times: [{ name: 'Odrasli BJJ', time: '20:00 - 21:30' }],
    },
    {
      name: 'Thursday',
      times: [
        { name: 'Kids BJJ', time: '18:00 - 19:00' },
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Friday',
      times: [{ name: 'Odrasli BJJ', time: '20:00 - 21:30' }],
    },
  ];

  const sheduleNS = [
    {
      name: 'Monday',
      times: [{ name: 'Odrasli BJJ', time: '21:00 - 22:30' }],
    },
    {
      name: 'Thuesday',
      times: [
        { name: 'Kids BJJ', time: '20:00 - 21:00' },
        { name: 'Odrasli BJJ', time: '21:00 - 22:30' },
      ],
    },
    {
      name: 'Wendsday',
      times: [{ name: 'Odrasli BJJ', time: '21:00 - 22:30' }],
    },
    {
      name: 'Thursday',
      times: [
        { name: 'Kids BJJ', time: '20:00 - 21:00' },
        { name: 'Odrasli BJJ', time: '21:00 - 22:30' },
      ],
    },
    {
      name: 'Friday',
      times: [
        { name: 'Kids BJJ', time: '20:00 - 21:00' },
        { name: 'Odrasli BJJ', time: '21:00 - 22:30' },
      ],
    },
  ];
  const sheduleVG = [
    {
      name: 'Monday',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Thuesday',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Wendsday',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Thursday',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Friday',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
  ];
  const setBL = () => {
    setActiveClass(false);
    setTown('BL');
    setShedule(scheduleBL);
    setActiveClass(true);
  };
  const setNS = () => {
    setActiveClass(false);
    setTown('NS');
    setShedule(sheduleNS);
    setActiveClass(true);
  };

  const setVG = () => {
    setActiveClass(false);
    setTown('VG');
    setShedule(sheduleVG);
    setActiveClass(true);
  };

  if (schedule === '') {
    setShedule(sheduleNS);
  } else if (schedule)
    return (
      <div className='schedule'>
        <h2>Raspored treninga</h2>
        <ScheduleSelector setBl={setBL} setNs={setNS} setVg={setVG} />
        <ScheduleView schedule={schedule} active={activeClass} town={town} />
      </div>
    );
};

export default Schedule;
