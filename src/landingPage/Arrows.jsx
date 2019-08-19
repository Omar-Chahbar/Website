import React from 'react';
import './Arrows.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/fontawesome-free-solid'

const Arrows = () => (
    <div className="arrow-container">
        <div className="icon bounce">
            <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <p>Come on in</p>
    </div>
);

export default Arrows;

