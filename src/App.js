import React from 'react';
import './App.scss';
import LandingPage from "./landingPage/LandingPage";
import Profile from "./profile/Profile";

function App() {
    return (
        <div className="App">
            <LandingPage/>
            <Profile/>
        </div>
    );
}

export default App;
