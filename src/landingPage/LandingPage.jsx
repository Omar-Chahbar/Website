import React from 'react';
import './LandingPage.scss';
import Arrows from "./Arrows";
import Fade from 'react-reveal/Fade';

const LandingPage = () => (
    <div className="jumbotron jumbotron-fluid landingPage">

        <div className="container">
            <center>
                <Fade left>
                    <h1 className="bigText">Hi, my name is <span className="emphasis">OMAR CHAHBAR</span></h1>
                </Fade>
                <Fade left delay={1000}>
                    <h2 className="subTitle">I'm a Full Stack Software Engineer.</h2>
                </Fade>
            </center>
        </div>
        <Arrows/>
    </div>
);

export default LandingPage;