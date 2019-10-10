import React from 'react';
import './Arrows.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/fontawesome-free-solid'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from 'prop-types';

const Arrows = ( { link, classValue } ) => (
    <div className="arrow-container">
        <div className={classValue}>
            <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <AnchorLink href={link} className="clickable-area link-unstyled"/>
    </div>
);

Arrows.propTypes = {
    link: PropTypes.string.isRequired,
};

export default Arrows;

