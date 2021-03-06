import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink, faMapMarkerAlt} from "@fortawesome/fontawesome-free-solid";
import './Education.scss'
import {Fade} from "react-reveal";

const Education = () => (
    <main className="CV-page">
        <div className="CV-grid">
            <div className="CV-grid-column">
                <div className="CV-jobs">
                    <section className="CV-timeline CV-job">
                        <h3 className="CV-timeline-heading"><span className="CV-timeline-heading-title">Western University </span>
                            <small className="CV-timeline-heading-duration"><FontAwesomeIcon
                                icon={faMapMarkerAlt}/> London, Ontario</small></h3>
                        <ul className="CV-timeline-details">
                            <Fade bottom delay={250}>
                                <li className="CV-job-timeline-item">Bachelor of Engineering Science with Professional
                                    Internship, Software Engineering
                                </li>
                            </Fade>
                            <Fade bottom delay={500}>
                                <li className="CV-job-timeline-item">Graduating April 2020
                                </li>
                            </Fade>
                            <Fade bottom delay={750}>
                                <li className="CV-job-timeline-item">3.8 GPA
                                </li>
                            </Fade>
                            <Fade bottom delay={1000}>
                                <li className="CV-job-timeline-item">Scholarship of Excellence recipient
                                </li>
                            </Fade>
                            <Fade bottom delay={1250}>
                                <li className="CV-job-timeline-item">Notable Classes: Software Engineering Design, Algorithms and Data Structures, Operating Systems, Computer Networking, Cloud Computing, Software Requirements and Analysis
                                </li>
                            </Fade>
                        </ul>
                        <Fade delay={1500}>
                        <a href="https://www.uwo.ca/"><FontAwesomeIcon icon={faLink}/><span className="link">www.uwo.ca</span></a>
                        </Fade>
                    </section>
                </div>
            </div>
        </div>
    </main>
);

export default Education;