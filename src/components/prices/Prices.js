import React from 'react'
import './Prices.scss'

import Price from './Price'


const Prices = () => {

    const prices = [
        {
            id: 1,
            name: 'Standard Plan',
            regularPrice: 55.60,
            featureOne: 'Feature 1',
            featureTwo: 'Feature 2',
            featureTree: 'Feature 3'
        },
        {
            id: 2,
            name: 'Golden Plan',
            regularPrice: 55.60,
            featureOne: 'Feature 1',
            featureTwo: 'Feature 2',
            featureTree: 'Feature 3'
        },
        {
            id: 3,
            name: 'Platinum Plan',
            regularPrice: 55.60,
            featureOne: 'Feature 1',
            featureTwo: 'Feature 2',
            featureTree: 'Feature 3'
        },

    ];
    return (
        <div className="prices">
            <h2>Prices</h2>

            <div className="prices__container">
                {
                    prices.map((price) => (
                        <Price key={price.id} price={price} />
                    ))
                }
            </div>

        </div>
    )
}

export default Prices



