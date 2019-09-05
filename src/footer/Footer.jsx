import React from 'react';
import './Footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <div className="footer">
        <div className="iconList">
            <a href="https://github.com/Omar-Chahbar">
                <div className="footerIconFrame">
                    <FontAwesomeIcon icon={faGithub} className="githubIcon"/>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/ochahbar/">
                <div className="footerIconFrame">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedInIcon"/>
                </div>
            </a>
        </div>
        <div className="bottomText">
            OMAR CHAHBAR © 2019
        </div>
    </div>
);

export default Footer;
