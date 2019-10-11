import React from 'react';
import './Profile.scss';
import Fade from 'react-reveal/Fade';

const longDelay = 750;
const shortDelay = 350;
const Profile = () => (
    <div id="profile" className="jumbotron jumbotron-fluid profile">
        <Fade left>
            <h2 className="title">ABOUT</h2>
        </Fade>
        <Fade left delay={300}>
            <div className="underline"/>
        </Fade>
        <div className="row row-space">
            <div className="col-lg-6">
                <Fade left>
                    <div className="container profile-container">
                        <h3 className="info">I'm a Full Stack Software Engineer graduating from <span
                            className="emphasis">Western University</span> in
                            April 2020.
                            I have a serious passion for <span className="emphasis">software design</span> and I am
                            currently
                            looking for employment opportunities upon graduation.</h3>
                        <h3>Here's a few technologies I've been working with recently:</h3>
                        <ul className="list-group-flush row">
                            <Fade left delay={shortDelay}>
                                <li className="list-group-item col-6">Java</li>
                            </Fade>
                            <Fade left delay={longDelay}>
                                <li className="list-group-item col-6">Docker</li>
                            </Fade>
                            <Fade left delay={shortDelay}>
                                <li className="list-group-item col-6">Kubernetes</li>
                            </Fade>
                            <Fade left delay={longDelay}>
                                <li className="list-group-item col-6">Python</li>
                            </Fade>
                            <Fade left delay={shortDelay}>
                                <li className="list-group-item col-6">JavaScript (ES6+)</li>
                            </Fade>
                            <Fade left delay={longDelay}>
                                <li className="list-group-item col-6">Spring Framework</li>
                            </Fade>
                            <Fade left delay={shortDelay}>
                                <li className="list-group-item col-6">React</li>
                            </Fade>
                            <Fade left delay={longDelay}>
                                <li className="list-group-item col-6">Bootstrap</li>
                            </Fade>
                            <Fade left delay={shortDelay}>
                                <li className="list-group-item col-6">Maven</li>
                            </Fade>
                            <Fade left delay={longDelay}>
                                <li className="list-group-item col-6">MySQL</li>
                            </Fade>
                            <Fade left delay={shortDelay}>
                                <li className="list-group-item col-6">Git</li>
                            </Fade>
                        </ul>
                    </div>
                </Fade>
            </div>

            <div className="col-lg-6 picture-div">
                <Fade delay={1300}>
                    <div className="frame1"/>
                    <div className="frame2"/>
                    <div className="picture"/>
                </Fade>
            </div>
        </div>
        {/*<Arrows link="#experience" classValue="icon"/>*/}
    </div>
);

export default Profile;