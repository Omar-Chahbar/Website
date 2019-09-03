import React from 'react';
import './Experience.scss';
import Education from "./Education";
import Career from "./Career";
import {Fade} from "react-reveal";

const Experience = () => (
    <div className="jumbotron jumbotron-fluid experience">
        <div className="container container-fluid experience-container">
            <div className="row row-space">
                <div className="col-lg-6 no-gutters">
                    <Fade left>
                        <h2 className="exp-title">EDUCATION</h2>
                    </Fade>
                    <Education/>
                </div>
                <div className="col-lg-6 no-gutters">
                    <Fade right>
                        <h2 className="exp-title career-info">EXPERIENCE</h2>
                    </Fade>
                    <Career/>
                </div>
            </div>
        </div>
    </div>
);

export default Experience;