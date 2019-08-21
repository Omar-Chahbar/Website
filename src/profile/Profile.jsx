import React from 'react';
import './Profile.scss';
import Fade from 'react-reveal/Fade';

const Profile = () => (
    <div id="profile" className="jumbotron jumbotron-fluid profile">
        <Fade bottom>
            <div className="container profile-container">
                <h2 className="title">About Me</h2>
                <h3 className="info">I'm a Full Stack Software Developer. Blah Blah Blah This
                    is where I type lots of things that make me sound employable. I'll figure this out later.
                    More filler text so that this paragraph looks as long as it should</h3>
                <h3>Here's a few technologies I've been working with recently:</h3>
                <ul className="list-group-flush row">
                    <li className="list-group-item col-md-6">Java</li>
                    <li className="list-group-item col-md-6">Docker</li>
                    <li className="list-group-item col-md-6">Python</li>
                    <li className="list-group-item col-md-6">JavaScript (ES6+)</li>
                    <li className="list-group-item col-md-6">Spring Framework</li>
                    <li className="list-group-item col-md-6">React</li>
                    <li className="list-group-item col-md-6">Bootstrap</li>
                    <li className="list-group-item col-md-6">Maven</li>
                    <li className="list-group-item col-md-6">MySQL</li>
                    <li className="list-group-item col-md-6">Git</li>
                </ul>
            </div>
        </Fade>

        <Fade bottom delay={500}>
            <div className="frame1"/>
            <div className="frame2"/>
            <div className="picture"/>
        </Fade>
    </div>
);

export default Profile;