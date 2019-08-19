import React from 'react';
import './LandingPage.scss';
import Arrows from "./Arrows";

const LandingPage = () => (
    <div className="jumbotron jumbotron-fluid landingPage">
        <div className="container">
            <center>
                <h1>Hi, I'm Omar</h1>
                <h2>I'm a Full Stack Software Developer.</h2>
            </center>
        </div>
        <Arrows />
    </div>
);

export default LandingPage;