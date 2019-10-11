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
                                <li className="CV-job-timeline-item">Worked on new features and modifications for a complex web application built with Java Spring and Apache Solr.
                                    This application is used by General Motors to create and manage its Vehicle Incentives and comes with a suite of Web Services used to query this data
                                </li>
                            </Fade>
                            <Fade bottom delay={500}>
                                <li className="CV-job-timeline-item">Fully Designed and implemented an internal tool to manage resourcing
                                    needs across the company using ReactJS and Spring Boot, created automated pipelines, docker containers,
                                    and deployed to a kubernetes cluster. The tool is currently in use by upper management to manage over 500 employees.
                                </li>
                            </Fade>
                        </ul>
                        <Fade delay={1000}>
                            <a href="https://www.autodatasolutions.com/"><FontAwesomeIcon icon={faLink}/><span className="link">www.autodatasolutions.com</span></a>
                        </Fade>
                    </section>
                </div>
            </div>
        </div>
    </main>
);

export default Career;