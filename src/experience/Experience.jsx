import React from 'react';
import './Experience.scss';
import Education from "./Education";
import Career from "./Career";

const Experience = () => (
    <div className="jumbotron jumbotron-fluid experience">
        <div className="container container-fluid experience-container">
            <div className="row row-space">
                <div className="col-lg-6 no-gutters">
                    <h2 className="exp-title">Education</h2>
                    <Education/>
                </div>
                <div className="col-lg-6 no-gutters">
                    <h2 className="exp-title">Experience</h2>
                    <Career/>
                </div>
            </div>
        </div>
    </div>
);

export default Experience;