import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ActionModal.scss';

const ActionModal = ({ closeModal }) => {
  const [gender, setGender] = useState('Odrasli');
  const [seat, setSeat] = useState('Hostel');

  const sendModalEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6d0aonf',
        'template_1c0j886',
        e.target,
        'user_hlIIfb6gy0PVZsTBKatDQ'
      )
      .then(
        (result) => {
          console.log(result.text);
          closeModal(false);
          setTimeout(() => {
            alert('Uspešno ste registrovani na BJJ Kamp - Višegrad 2022');
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button
            className='btn-modalForm cancel'
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>

        <div className='modalTitle' id='modalForm'>
          <h3> Prijava za BJJ Kamp 2022 - Višegrad</h3>
        </div>
        <div className='modalBody'>
          <form className='modalForm' onSubmit={sendModalEmail}>
            <div className='modalFormSection'>
              <label className='label' htmlFor='q_modalname'>
                Ime i prezime
              </label>
              <input
                type='text'
                id='q_modalname'
                name='q_modalname'
                placeholder='Ime i prezime'
              />
            </div>
            <div className='modalFormSection'>
              <label className='label' htmlFor='q_modalemail'>
                E mail
              </label>
              <input
                type='email'
                id='q_modalemail'
                name='q_modalemail'
                placeholder='Email'
              />
            </div>
            <div className='modalFormSection'>
              <label className='label' htmlFor='q_modalphone'>
                Telefon
              </label>
              <input
                type='text'
                id='_phone'
                name='q_modalphone'
                placeholder='Telefon'
              />
            </div>
            <div className='modalFormSection'>
              <p>Odaberite uzrast</p>
              <div className='modalFormSection__radio'>
                <label className='label' htmlFor='q_modalage1'>
                  deca do 16 godina
                </label>
                <input
                  type='radio'
                  id='q_modalage1'
                  name='q_modalage1'
                  value='Deca'
                  checked={gender === 'Deca'}
                  onClick={() => setGender('Deca')}
                />
              </div>
              <div className='modalFormSection__radio'>
                <label className='label' htmlFor='q_modalage2'>
                  odrasli preko 16 godina
                </label>
                <input
                  type='radio'
                  id='q_modalage2'
                  name='q_modalage2'
                  value='Odrasli'
                  checked={gender === 'Odrasli'}
                  onClick={() => setGender('Odrasli')}
                />
              </div>
            </div>
            <div className='modalFormSection'>
              <p>Opcija za smeštaj</p>
              <div className='modalFormSection__radio'>
                <label className='label' htmlFor='q_modalseat1'>
                  Hostel (10 EUR)
                </label>
                <input
                  type='radio'
                  id='q_modalseat1'
                  name='q_modalseat1'
                  value='hostel'
                  checked={seat === 'Hostel'}
                  onClick={() => setSeat('Hostel')}
                />
              </div>
              <div className='modalFormSection__radio'>
                <label className='label' htmlFor='q_modalseat2'>
                  Privatni smeštaj (5 EUR)
                </label>
                <input
                  type='radio'
                  id='q_modalseat2'
                  name='q_modalseat2'
                  value='privatni'
                  checked={seat === 'Privatni'}
                  onClick={() => setSeat('Privatni')}
                />
              </div>
              <div className='modalFormSection__radio'>
                <label className='label' htmlFor='q_modalseat3'>
                  U sopstvenom aranžmanu
                </label>
                <input
                  type='radio'
                  id='q_modalseat3'
                  name='q_modalseat3'
                  value='sopstveni'
                  checked={seat === 'Sopstveni'}
                  onClick={() => setSeat('Sopstveni')}
                />
              </div>
            </div>
            <div className='modalFormSection'>
              <label className='label' htmlFor='q_modalmessage'>
                Dodatne informacije:
              </label>
              <textarea
                id='q_modalmessage'
                rows='4'
                name='q_modalmessage'
              ></textarea>
            </div>
            <div className='modalFooter'>
              <button
                className='btn-modalForm cancel'
                onClick={() => closeModal(false)}
              >
                Otkaži
              </button>
              <input
                className='btn-modalForm confirm'
                type='submit'
                id='q_modalsubmit'
                value='Registruj se'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
