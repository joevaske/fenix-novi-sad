import React from 'react';
import {
  GiAngelWings,
  GiAncientSword,
  GiBorderedShield,
  GiPointing,
  GiChampions,
  GiChewedSkull,
} from 'react-icons/gi';

import './Services.scss';

function Service() {
  return (
    <div className='services' id='services'>
      <div className='services__container'>
        <h2>Posebne Ponude</h2>

        {/*
               Brazilian Jiu Jitsu Academy
                BJJ Kids
                Women Selfdefense
                Advanced Classes
                Private Classes
                Some Offers
              
              */}

        <div className='services__offers'>
          <div className='offer bb br b'>
            <GiAncientSword className='offer__icon' />
            <h3>BRAZILSKI DŽIUDŽICU / BJJ</h3>
            <p>
              Nikada nije suviše rano ili kasno da započnete trening i zdrave
              navike! Veština je kreirana tako da radi za manje i slabije, a u
              rukama jake osobe može biti samo još efektnija!
            </p>
          </div>
          <div className='offer bb br b'>
            <GiChampions className='offer__icon' />
            <h3>BJJ ZA DECU</h3>
            <p>
              Sve tehnike koje deca uče kroz igru su potpuno defanzivne i ne
              uključuju udarce. Mi prvenstveno učimo decu kako da izbegnu sukob
              i ne iniciraju psihičku agresiju. Ukoliko je dete ipak napadnuto,
              nudimo mu tehnike za nenasilno neutralizovanje pretnje i
              održavanje kontrole nad napadačem dok ne stigne pomoć.
            </p>
          </div>
          <div className='offer bb b'>
            <GiBorderedShield className='offer__icon' />
            <h3>SAMOODBRANA ZA ŽENE</h3>
            <p>
              Ovaj program sadrži 15 najčešćih napada i situacija, od povlačenja
              za kosu, bacanja na zemlju ili napada oružjem. Za razliku od
              drugih programa samoodbrane za koje je potrebna snaga, brzina i
              koordinacija, tehnike koje se rade na ovom kursu su zasnovane na
              polugama, tajmingu i tehnici, tako da ih svako bez obzira na
              godište ili atletske sposobnosti može iskoristiti protiv jačih
              protivnika.
            </p>
          </div>
          <div className='offer br b'>
            <GiChewedSkull className='offer__icon' />
            <h3>UVODNI ČASOVI</h3>
            <p>
              Uvodni časovi namenjeni su novim članovima i služe za upoznavanje
              vežbača sa osnovnim principima i tehnikama brazilske džiudžice.
            </p>
          </div>
          <div className='offer br b'>
            <GiPointing className='offer__icon' />
            <h3>NAPREDNA GRUPA</h3>
            <p>
              Rad u naprednoj grupi čine svakodnevni treninzi u trajanju do dva
              časa efektivno. Uz pravilan odnos prema radu u ovoj grupi, uspeh u
              brazilskoj džiudžici je zagarantovan!
            </p>
          </div>
          <div className='offer b'>
            <GiAngelWings className='offer__icon' />
            <h3>PRIVATNI ČASOVI</h3>
            <p>
              Garantovano najbrži napredak! Kontaktirajte nas i zakažite
              privatni čas!zarn build
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
