import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink, faMapMarkerAlt} from "@fortawesome/fontawesome-free-solid";
import './Career.scss';
import {Fade} from "react-reveal";

const Career = () => (
    <main className="CV-page">
        <div className="CV-grid">
            <div className="CV-grid-column">
                <div className="CV-jobs">
                    <section className="CV-timeline CV-job">
                        <h3 className="CV-timeline-heading"><span className="CV-timeline-heading-title">Autodata Solutions </span>
                            <small className="CV-timeline-heading-name">Software Developer, May 2018 - September 2019</small>
                            <small className="CV-timeline-heading-duration"><FontAwesomeIcon
                                icon={faMapMarkerAlt}/> London, Ontario</small></h3>
                        <ul className="CV-timeline-details">
                            <Fade bottom>
                                <li className="CV-job-timeline-item">Lorem Ipsum whatever whateer filler text
                                </li>
                            </Fade>
                            <Fade bottom delay={500}>
                                <li className="CV-job-timeline-item">Filler textFiller textFiller textFiller textFiller textFiller textFiller textFiller text
                                </li>
                            </Fade>
                            <Fade bottom delay={1000}>
                                <li className="CV-job-timeline-item">Why are you still reading this? Filler textFiller textFiller textFiller textFiller text
                                </li>
                            </Fade>
                            <Fade bottom delay={1500}>
                                <li className="CV-job-timeline-item">Stop! Filler textFiller textFiller textFiller textFiller textFiller textFiller textFiller text
                                </li>
                            </Fade>
                        </ul>
                        <Fade delay={2000}>
                            <a href="https://www.autodatasolutions.com/"><FontAwesomeIcon icon={faLink}/><span className="link">www.autodatasolutions.com</span></a>
                        </Fade>
                    </section>
                </div>
            </div>
        </div>
    </main>
);

export default Career;