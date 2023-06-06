import React, { useState } from 'react';
import ScheduleSelector from './ScheduleSelector';
import ScheduleView from './ScheduleView';

import './Schedule.scss';

const Schedule = () => {
  const [town, setTown] = useState('');
  const [schedule, setShedule] = useState('');
  const [activeClass, setActiveClass] = useState(false);

  /* const scheduleBL = [
    {
      name: 'Ponedeljak',
      times: [
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Utorak',
      times: [
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Sreda',
      times: [
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Četvrtak',
      times: [
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Petak',
      times: [
        { name: 'Kids BJJ', time: '19:00 - 20:00' },
        { name: 'Odrasli BJJ', time: '20:00 - 21:30' },
      ],
    },
  ]; */

  const sheduleNS = [
    {
      name: 'Ponedeljak',
      times: [
        { name: 'Jutarnji trening - BJJ', time: '07:30 - 08:30' },
        { name: 'BJJ Intro', time: '19:00 - 20:00' },
        { name: 'BJJ Obojeni/Beli', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Utorak',
      times: [
        { name: 'Jutarnji trening - BJJ', time: '07:30 - 08:30' },
        { name: 'BJJ Deca ', time: '19:00 - 20:15' },
        { name: 'BJJ Obojeni/Beli ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Sreda',
      times: [
        { name: 'Jutarnji trening - BJJ', time: '07:30 - 08:30' },
        { name: 'BJJ Intro ', time: '19:00 - 20:00' },
        { name: 'BJJ Obojeni/Beli ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Četvrtak',
      times: [
        { name: 'Jutarnji trening - BJJ', time: '07:30 - 08:30' },
        { name: 'BJJ Deca ', time: '19:00 - 20:15' },
        { name: 'BJJ Obojeni/Beli ', time: '20:00 - 21:30' },
      ],
    },
    {
      name: 'Petak',
      times: [
        { name: 'Jutarnji trening - BJJ', time: '07:30 - 08:30' },
        { name: 'BJJ Intro ', time: '19:00 - 20:00' },
        { name: 'BJJ Obojeni/Beli ', time: '20:00 - 21:30' },
      ],
    },
  ];
  /*   const sheduleVG = [
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
  ]; */
  /*  const setBL = () => {
    setActiveClass(false);
    setTown('BL');
    setShedule(scheduleBL);
    setActiveClass(true);
  }; */
  const setNS = () => {
    setActiveClass(false);
    setTown('NS');
    setShedule(sheduleNS);
    setActiveClass(true);
  };

  /*   const setVG = () => {
    setActiveClass(false);
    setTown('VG');
    setShedule(sheduleVG);
    setActiveClass(true);
  }; */

  if (schedule === '') {
    setShedule(sheduleNS);
  } else if (schedule)
    return (
      <div className='schedule' id='schedule'>
        <h2>Raspored treninga</h2>
        <ScheduleSelector
          /* setBl={setBL} */ setNs={setNS} /* setVg={setVG} */
        />
        <ScheduleView schedule={schedule} active={activeClass} town={town} />
      </div>
    );
};

export default Schedule;
