import React from 'react'
import './AboutForm.scss'

const AboutForm = () => {
    return (
        <form className="form">
            <h3>Get a Quote</h3>
            <label className="label" htmlFor="q_name">Full Name</label>
            <input type="text" id="q_name" name="q_name" placeholder="Full name" />

            <label className="label" htmlFor="q_email">E mail</label>
            <input type="email" id="q_email" name="q_email" placeholder="Email" />

            <label className="label" htmlFor="q_phone">Phone</label>
            <input type="text" id="_phone" name="q_phone" placeholder="Phone" />

            <label className="label" htmlFor="q_message">Message</label>
            <textarea id="q_message" name="q_message" ></textarea>
            <input type="submit" id="q_submit" value="Send Request" className="btn-form" />
        </form>
    )
}

export default AboutForm
