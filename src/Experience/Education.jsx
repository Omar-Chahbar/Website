import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faLink, faMapMarkerAlt} from "@fortawesome/fontawesome-free-solid";
import './Education.scss'

const Education = () => (
    <div className="card">
        <h5 className="card-header">Western University</h5>
        <div className="card-body">
            <h6 className="card-title">Bachelor of Engineering in Software Engineering</h6>
            <ul className="fa-ul">
                <li className="card-text"><FontAwesomeIcon icon={faChevronRight}/> Graduating April 2020</li>
                <li className="card-text"><FontAwesomeIcon icon={faChevronRight}/> Heaslip Scholarship Recipient</li>
                <li className="card-text"><FontAwesomeIcon icon={faChevronRight}/> 3.7 GPA</li>
            </ul>
            <div className="card-footer">
                <h6 className="location"><FontAwesomeIcon icon={faMapMarkerAlt}/> London, Ontario</h6>
                <a href="https://www.uwo.ca/"><FontAwesomeIcon icon={faLink}/> www.uwo.ca</a>
            </div>
        </div>
    </div>
);

export default Education;