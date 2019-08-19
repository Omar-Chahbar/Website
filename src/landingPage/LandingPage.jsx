import React from 'react';
import './LandinPage.css';
import Arrows from "./Arrows";

const LandingPage = () => (
    <div className="jumbotron">
        <div className="container">
            <center>
                <h1 className="typewriter">Hi, I'm Omar</h1>
                <h2 className="typewriter">I'm a Full Stack Software Developer.</h2>
            </center>
        </div>
        <Arrows />
    </div>
);

export default LandingPage;