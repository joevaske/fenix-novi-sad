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
      name: 'Ponedeljak',
      times: [{ name: 'Odrasli BJJ', time: '20:00 - 21:30' }],
    },
    {
      name: 'Utorak',
      times: [
        { name: 'Kids BJJ', time: '18:00 - 19:00' },
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Sreda',
      times: [{ name: 'Odrasli BJJ', time: '20:00 - 21:30' }],
    },
    {
      name: 'Četvrtak',
      times: [
        { name: 'Kids BJJ', time: '18:00 - 19:00' },
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Petak',
      times: [{ name: 'Odrasli BJJ', time: '20:00 - 21:30' }],
    },
  ];

  const sheduleNS = [
    {
      name: 'Ponedeljak',
      times: [{ name: 'Odrasli BJJ', time: '21:00 - 22:30' }],
    },
    {
      name: 'Utorak',
      times: [
        { name: 'Kids BJJ', time: '20:00 - 21:00' },
        { name: 'Odrasli BJJ', time: '21:00 - 22:30' },
      ],
    },
    {
      name: 'Sreda',
      times: [{ name: 'Odrasli BJJ', time: '21:00 - 22:30' }],
    },
    {
      name: 'Četvrtak',
      times: [
        { name: 'Kids BJJ', time: '20:00 - 21:00' },
        { name: 'Odrasli BJJ', time: '21:00 - 22:30' },
      ],
    },
    {
      name: 'Petak',
      times: [
        { name: 'Kids BJJ', time: '20:00 - 21:00' },
        { name: 'Odrasli BJJ', time: '21:00 - 22:30' },
      ],
    },
  ];
  const sheduleVG = [
    {
      name: 'Ponedeljak',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Utorak',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Sreda',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Četvrtak',
      times: [{ name: 'Odrasli BJJ', time: '19:00 - 20:30' }],
    },
    {
      name: 'Petak',
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
      <div className='schedule' id='schedule'>
        <h2>Raspored treninga</h2>
        <ScheduleSelector setBl={setBL} setNs={setNS} setVg={setVG} />
        <ScheduleView schedule={schedule} active={activeClass} town={town} />
      </div>
    );
};

export default Schedule;
