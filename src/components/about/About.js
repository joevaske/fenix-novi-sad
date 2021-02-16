import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { GiSlashedShield, GiStrong } from 'react-icons/gi';



import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="about__desc">
                <h2>Hi We are the best BJJ team</h2>
                <p>
                    FENIX BJJ Academy provides a superior ambience and conditions in which people, regardless of previous experience, age or current fitness, learn martial arts, and above all, Brazilian Jiu Jitsu (BJJ), Grappling and MMA. We also provide customized Self-Defense programs as part of Brazilian Jiu Jitsu.
                </p>
                <div className="line" />
                <div className="about__desc__benefits">
                    <div className="benefit">
                        <h3><FaHeartbeat className="benefit__icon" />Enviable physical condition</h3>
                        <p>BJJ fighters are one of the most superior and most trained athletes of today!</p>
                    </div>
                    <div className="benefit">
                        <h3><GiSlashedShield className="benefit__icon" />Self-defense</h3>
                        <p>You will be able to defend yourself in any situation and whenever needed!</p>
                    </div>
                    <div className="benefit">
                        <h3><GiStrong className="benefit__icon" />High level of self-confidence</h3>
                        <p>Which will significantly help you in everyday life!</p>
                    </div>
                </div>
            </div>
            <div className="about__form">
                <h3>Form goes here</h3>
            </div>

        </div>
    )
}

export default About
