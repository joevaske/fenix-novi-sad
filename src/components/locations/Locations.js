import React from 'react'
import './Locations.scss'
import Location from './Location'

const Locations = () => {
    const adress = [
        {
            id: 1,
            name: 'FENIX BANJA LUKA',
            street: 'Vojvode Petra Bojovića 1A ',
            phone: '+387 66 234 105'
        },
        {
            id: 2,
            name: 'FENIX NOVI SAD',
            street: 'Sutjeska 2 - SPENS 1 sprat ',
            phone: '+381 63 821 8306'
        },
        {
            id: 3,
            name: 'FENIX VIŠEGRAD',
            street: 'Trg Palih boraca bb',
            phone: '+387 66 181 824'
        }
    ];

    return (
        <div className="locations">
            <h2>Locations</h2>
            <div className="locations__container">
                {
                    adress.map((addr) => (
                        <Location key={addr.id} addr={addr} />
                    ))
                }
            </div>

        </div>
    )
}

export default Locations
