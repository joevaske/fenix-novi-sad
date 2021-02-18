import React from 'react'
import './AboutForm.scss'

const AboutForm = () => {
    return (
        <form className="form">
            <h3>Get a Quote</h3>
            <input type="text" name="q_name" placeholder="Full name" />
            <input type="email" name="q_email" placeholder="Email" />
            <input type="text" name="q_phone" placeholder="Phone" />
            <textarea name="q_message" id="q_message" ></textarea>
            <input type="submit" id="q_submit" value="Send Request" className="btn-form" />
        </form>
    )
}

export default AboutForm
