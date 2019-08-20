import React from 'react';
import './App.scss';
import LandingPage from "./landingPage/LandingPage";
import Profile from "./profile/Profile";
import Experience from "./Experience/Experience";

function App() {
    return (
        <div className="App">
            <LandingPage/>
            <Profile/>
            <Experience/>
        </div>
    );
}

export default App;
