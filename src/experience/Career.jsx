import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink, faMapMarkerAlt} from "@fortawesome/fontawesome-free-solid";
import './Career.scss';

const Career = () => (
    <div className="card">
        <h5 className="card-header">Autodata Solutions</h5>
        <div className="card-body">
            <h6 className="card-title">Software Developer Intern, May 2018 - Sept 2019</h6>

            <h6 className="card-text">My first role at Autodata was maintaining a large and complex Web Application using ExtJS as it's UI and a Java server using the Spring Framework. General Motors uses this application to create and manage it's Vehicle Incentives and comes with a suite of Web Services used to query this data.
                After a couple of years, I was moved to several project teams, creating a vast array of web and data transformation applications spanning from Vehicle Conifugrators to REST based Image Compositing services</h6>
            <div className="card-footer">
                <h6 className="location"><FontAwesomeIcon icon={faMapMarkerAlt}/> London, Ontario</h6>
                <a href="https://www.autodatasolutions.com/"><FontAwesomeIcon icon={faLink}/> www.autodatasolutions.com</a>
            </div>
        </div>
    </div>
);

export default Career;