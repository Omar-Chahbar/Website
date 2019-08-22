import React from 'react';
import EmailForm from "./EmailForm";
import './Contact.scss';

const Contact = () => (
    <div className="contact">
        <h2>CONTACT</h2>
        <h3>Have a question? Feel free to reach out!</h3>
        <EmailForm />
    </div>
);

export default Contact;