import React from 'react';
import './LandingPage.scss';
import Arrows from "./Arrows";
import Fade from 'react-reveal/Fade';

const LandingPage = () => (
    <div className="jumbotron jumbotron-fluid landingPage">

        <div className="container">
            <center>
                <Fade left>
                    <h1>Hi, I'm Omar</h1>
                </Fade>
                <Fade left delay={500}>
                    <h2>I'm a Full Stack Software Engineer.</h2>
                </Fade>
            </center>
        </div>
        <Arrows/>
    </div>
);

export default LandingPage;