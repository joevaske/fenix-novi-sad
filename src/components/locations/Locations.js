import React from 'react';
import './Locations.scss';
import Location from './Location';

const Locations = () => {
  const adress = [
    /*  {
      id: 1,
      name: 'FENIX BANJA LUKA',
      street: 'Veljka Mlađenovića BB - INCEL ',
      phone: '+387 65 635 061',
    }, */
    {
      id: 2,
      name: 'FENIX NOVI SAD',
      street: 'Alberta Tome 2a',
      phone: '+381 63 821 8306',
    },
    /*   {
      id: 3,
      name: 'FENIX VIŠEGRAD',
      street: 'Trg Palih boraca bb',
      phone: '+387 65 525 716',
    }, */
  ];

  return (
    <div className='locations'>
      <h2>Lokacija</h2>
      <div className='locations__container'>
        {adress.map((addr) => (
          <Location key={addr.id} addr={addr} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
