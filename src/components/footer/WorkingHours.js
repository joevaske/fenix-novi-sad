import React from 'react';
import './WorkingHours.scss';

const WorkingHours = () => {
  const workingHours = [
    {
      id: 1,
      location: 'Novi Sad',
      trainingDays: ' Ponedeljak - Subota',
      trainingTime: ' 07:20 - 22:00 ',
    },
    /*  {
      id: 2,
      location: 'Banja Luka',
      trainingDays: ' Ponedeljak - Petak',
      trainingTime: ' 18:00 - 22:00 ',
    }, */
    /*   {
      id: 3,
      location: 'Visegrad',
      trainingDays: ' Ponedeljak - Petak',
      trainingTime: ' 19:00 - 22:00 ',
    }, */
  ];
  return (
    <div className='working-hours'>
      <h3>Radni sati</h3>

      {workingHours.map((wa) => (
        <div className='working-hours__item' key={wa.id}>
          <h4> {wa.location}</h4>
          <div className='working-hours__time'>
            <p>{wa.trainingDays}</p>
            <p>{wa.trainingTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkingHours;
