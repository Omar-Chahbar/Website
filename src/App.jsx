import React from 'react';
import './App.scss';
import LandingPage from "./landingPage/LandingPage";
import Profile from "./profile/Profile";
import Experience from "./experience/Experience";
import Project from "./projects/Project";
import Contact from "./contact/Contact";

function App() {
    return (
        <div className="App">
            <LandingPage/>
            <Profile/>
            <Experience/>
            <Project/>
            <Contact />
        </div>
    );
}

export default App;
