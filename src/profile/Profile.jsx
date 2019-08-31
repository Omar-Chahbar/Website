import React from 'react';
import './Profile.scss';
import Fade from 'react-reveal/Fade';

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
                            <li className="list-group-item col-md-6 col-6">Java</li>
                            <li className="list-group-item col-md-6 col-6">Docker</li>
                            <li className="list-group-item col-md-6 col-6">Kubernetes</li>
                            <li className="list-group-item col-md-6 col-6">Python</li>
                            <li className="list-group-item col-md-6 col-6">JavaScript (ES6+)</li>
                            <li className="list-group-item col-md-6 col-6">Spring Framework</li>
                            <li className="list-group-item col-md-6 col-6">React</li>
                            <li className="list-group-item col-md-6 col-6">Bootstrap</li>
                            <li className="list-group-item col-md-6 col-6">Maven</li>
                            <li className="list-group-item col-md-6 col-6">MySQL</li>
                            <li className="list-group-item col-md-6 col-6">Git</li>
                        </ul>
                    </div>
                </Fade>
            </div>

            <div className="col-lg-6">
                <Fade bottom delay={800}>
                    <div className="frame1"/>
                    <div className="frame2"/>
                    <div className="picture"/>
                </Fade>
            </div>
        </div>
    </div>
);

export default Profile;