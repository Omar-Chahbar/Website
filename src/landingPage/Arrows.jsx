import React from 'react';
import './Arrows.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/fontawesome-free-solid'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Arrows = () => (
    <div className="arrow-container">
        <div className="icon bounce">
            <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <p>Come on in</p>
        <AnchorLink href="#profile" className="clickable-area link-unstyled"/>
    </div>
);

export default Arrows;

