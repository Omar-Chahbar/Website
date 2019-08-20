import React from 'react';
import './App.scss';
import LandingPage from "./landingPage/LandingPage";
import Profile from "./profile/Profile";
import Experience from "./Experience/Experience";
import Project from "./projects/Project";

function App() {
    return (
        <div className="App">
            <LandingPage/>
            <Profile/>
            <Experience/>
            <Project/>
        </div>
    );
}

export default App;
