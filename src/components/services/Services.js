import React from 'react'
import {
    GiAngelWings,
    GiAncientSword,
    GiBorderedShield,
    GiPointing,
    GiChampions,
    GiChewedSkull
} from 'react-icons/gi'



import './Services.scss'




function Service() {
    return (
        <div className="services" id="services">
            <div className="services__container">
                <h2>Hot Offers</h2>

                {/*
               Brazilian Jiu Jitsu Academy
                BJJ Kids
                Women Selfdefense
                Advanced Classes
                Private Classes
                Some Offers
              
              */}

                <div className="services__offers">
                    <div className="offer bb br b">
                        <GiAncientSword className="offer__icon" />
                        <h3>Brazilian Jiu Jitsu Academy</h3>
                        <p>
                            It is never too late or too early to start training and healthy habits! The skill is created to work for the smaller and weaker, and in the hands of a strong person it can be even more effective!
                        </p>
                    </div>
                    <div className="offer bb br b">
                        <GiChampions className="offer__icon" />
                        <h3>BJJ Kids</h3>
                        <p>
                            The best way to develop a child is through jiu-jitsu games! The kids are thrilled as they learn them, they are completely defensive and don’t include punches!
                            Parent exercise with the child is also possibile!
                        </p>
                    </div>
                    <div className="offer bb b">
                        <GiBorderedShield className="offer__icon" />
                        <h3>Women Selfdefense</h3>
                        <p>
                            The most advanced self-defense program for women! The techniques that are processed are based on levers, timing and proper application so that anyone, regardless of age or athletic ability, can apply them. Our job is to save you !!!
                        </p>
                    </div>
                    <div className="offer br b">
                        <GiChewedSkull className="offer__icon" />
                        <h3>Advanced Classes</h3>
                        <p>
                            Working in an advanced group consists of daily trainings lasting two hours effectively! A modern approach and modern methods of learning techniques will help you gain an enviable level of knowledge!
                        </p>
                    </div>
                    <div className="offer br b">
                        <GiPointing className="offer__icon" />
                        <h3>Private Classes</h3>
                        <p>
                            It is never too late or too early to start training and healthy habits! The skill is created to work for the smaller and weaker, and in the hands of a strong person it can be even more effective!
                        </p>
                    </div>
                    <div className="offer b">
                        <GiAngelWings className="offer__icon" />
                        <h3>Brazilian Jiu Jitsu Academy</h3>
                        <p>
                            It is never too late or too early to start training and healthy habits! The skill is created to work for the smaller and weaker, and in the hands of a strong person it can be even more effective!
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Service
