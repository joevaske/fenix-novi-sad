import React, { useState } from 'react';
import camp2022 from '../../images/action/bjj-camp-visegrad-2022-background.jpg';
import ActionModal from './ActionModal';

import './Action.scss';

const Action = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='action' id='registration'>
      <div className='action-image'>
        <img src={camp2022} alt='Bjj kamp Visegrad 2022' />
      </div>
      <div className='action__text'>
        <p>4 - seminara (90 min) na dan + Open mat svaki dan</p>
        <p>8 - dečjih treninga</p>
        <p>rafting do kanjona Drine</p>
        <p>ZIP Line </p>
        <p>CAT CANYON adventures</p>
        <br />
        <br />
        <p>
          <strong>CENA:</strong>
        </p>
        <p>Za članove Fenix BJJ Akademije - 40,00 EUR</p>
        <p>Za ostale učesnike: 60,00 EUR</p>
        <p>
          <small>
            *Napomena: U cenu kampa uključen je rafting Drinom a smeštaj ishrana
            i dodatne aktivnosti se plaćaju posebno.
          </small>
        </p>
        <button
          className='btn-action'
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Registruj se!
        </button>
        {openModal && <ActionModal closeModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Action;
