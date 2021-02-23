import React from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Coach = ({ coach }) => {
    return (

        <div className={`coach coach-${coach.id}`}>
            <div className="coach__image">
                <img src={coach.src} alt="" />
            </div>
            <h2 className="coach__name"> {coach.name}</h2>
            <p className="coach__role">{coach.role}</p>
            <div className="coach__social">
                <div className="coach__social__icon">
                    <Link to={coach.insta}><FaInstagram /></Link>
                </div>
                <div className="coach__social__icon">
                    <Link to={coach.face}><FaFacebookF /></Link>
                </div>



            </div>

        </div>

    )
}

export default Coach
