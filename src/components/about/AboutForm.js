import React from 'react';
import './AboutForm.scss';

const AboutForm = () => {
  return (
    <form className='form'>
      <h3>Kontaktirajte nas</h3>
      <label className='label' htmlFor='q_name'>
        Ime i prezime
      </label>
      <input
        type='text'
        id='q_name'
        name='q_name'
        placeholder='Ime i prezime'
      />

      <label className='label' htmlFor='q_email'>
        E mail
      </label>
      <input type='email' id='q_email' name='q_email' placeholder='Email' />

      <label className='label' htmlFor='q_phone'>
        Telefon
      </label>
      <input type='text' id='_phone' name='q_phone' placeholder='Telefon' />

      <label className='label' htmlFor='q_message'>
        Poruka
      </label>
      <textarea id='q_message' name='q_message'></textarea>
      <input type='submit' id='q_submit' value='Pošalji' className='btn-form' />
    </form>
  );
};

export default AboutForm;
