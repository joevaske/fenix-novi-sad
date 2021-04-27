import React from 'react';

import './OurContacts.scss';

const OurContacts = () => {
  const ourContacts = [
    {
      id: 1,
      location: 'Novi Sad',
      address: 'Sutjeska 6',
      trainingPlace: ' Spens',
      phone: '+ 381 63 821 83 06',
    },
    {
      id: 2,
      location: 'Banja Luka',
      address: 'Bul Vojvode Petra Bojovića 1A',
      trainingPlace: ' Kampus',
      phone: '+ 387 66 243 105',
    },
    {
      id: 3,
      location: 'Visegrad',
      address: 'Trg Palih Boraca bb',
      trainingPlace: ' Robna Kuća',
      phone: '+ 387 66 181 824',
    },
  ];
  return (
    <div className='our-contacts'>
      <h3>Kontakti</h3>

      {ourContacts.map((oc) => (
        <div className='our-contacts__item' key={oc.id}>
          <div className='our-contacts__item-head'>
            <h4>{oc.location}</h4>
            <h4>{oc.trainingPlace}</h4>
          </div>
          <div className='our-contacts__item-body'>
            <p>{oc.address}</p>
            <p>{oc.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurContacts;
