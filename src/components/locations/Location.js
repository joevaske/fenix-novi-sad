import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Location = ({ addr }) => {
    return (
        <div>
            <div className="location">
                <h3>{addr.name}</h3>
                <h4>{addr.street}</h4>
                <h4 className="location__tel"> {addr.phone} </h4>
                <div className="location__phone"><Link to={`tel:${addr.phone}`}><FaPhoneAlt /></Link></div>
            </div>
        </div>
    )
}

export default Location
