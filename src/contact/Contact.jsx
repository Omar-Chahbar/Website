import React from 'react';
import EmailForm from "./EmailForm";
import './Contact.scss';
import {Fade} from "react-reveal";


const Contact = () => (
    <div className="contact">
        <Fade left>
            <h2 className="title">CONTACT</h2>
        </Fade>
        <Fade left duration={1500}>
        <h3>Have a question? Want to work together? Feel free to reach out!</h3>
        </Fade>
        <EmailForm/>
    </div>
);

export default Contact;