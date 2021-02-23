import React from 'react'


const Price = ({ price }) => {
    return (
        <div className="price">
            <div className="price__heading">
                <h3>{price.name}</h3>
            </div>
            <div className="price__price">
                <h2>{price.regularPrice}</h2>
            </div>
            <ul className="price__features">
                <li>{price.featureOne}</li>
                <li>{price.featureTwo}</li>
                <li>{price.featureTree}</li>
            </ul>
            <button className="btn btn-form">Start Now</button>
        </div>
    )
}

export default Price
