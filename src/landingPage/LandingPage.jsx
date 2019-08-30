import React from 'react';
import './LandingPage.scss';
import Arrows from "./Arrows";
import Fade from 'react-reveal/Fade';

const LandingPage = () => (
    <div className="jumbotron jumbotron-fluid landingPage">

        <div className="container">
            <center>
                <Fade left>
                    <h1 className="bigText">Hii, Esraa</h1>
                </Fade>
                <Fade left delay={1000}>
                    <h2 className="subTitle">{"You're the best <3"}</h2>
                </Fade>
            </center>
        </div>
        {/*<Arrows/>*/}
    </div>
);

export default LandingPage;