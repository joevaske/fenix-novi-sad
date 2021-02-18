import React from 'react'
import { GrDiamond } from 'react-icons/gr'
import whyUsImage from '../../images/djordje-stefan.png'



import './WhyUs.scss'

const WhyUs = () => {
    return (
        <div className="why-us">
            <div className="why-us__container">
                <h2>Why to Chose Us</h2>
                <p>
                    We motivate all participants to help each other in joint work, share knowledge and techniques, because in this way we strengthen unity, a good atmosphere and greatly improve the system of learning and developing individual talents. Our doors are always open for absolute beginners as well as for more experienced athletes or veterans.
                </p>
                <div className="line"></div>
                <div className="why-us__container__row">

                    <h3><GrDiamond className="icon" />10 Years of existing</h3>
                    <p>FENIX BJJ Academy Has been in existence since 2011</p>

                </div>
                <div className="why-us__container__row">


                    <h3><GrDiamond className="icon" />Fair Training Price</h3>
                    <p>For only 25EUR you get as much as 20-25 workouts per month</p>

                </div>
                <div className="why-us__container__row">
                    <h3><GrDiamond className="icon" />Sports Atmosphere</h3>
                    <p>FENIX BJJ Academy Has been in existence since 2011</p>

                </div>
            </div>
            <div className="why-us__image">
                <img src={whyUsImage} alt="" />
            </div>

        </div>
    )
}

export default WhyUs
