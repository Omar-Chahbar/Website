import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import PropTypes from 'prop-types';
import './FeaturedProject.scss';
import Fade from 'react-reveal/Fade';

const FeaturedProject = ({project}) => (
    <div className="project-container">
        <Fade
        <div className="project">
            <div className="project-content">
                <div className="project-label">{project.label}</div>
                <h4 className="project-title">{project.title}</h4>
                <div className="project-details">
                    <p>{project.details}</p>
                    <ul>
                        {project.languages.map((lang => <li>{lang}</li>))}
                    </ul>
                    <a href={project.link}><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>

            <div className={project.className}>
            </div>

        </div>
    </div>
);

FeaturedProject.propTypes = {
    project: PropTypes.shape({
        label: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        languages: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }),
};

export default FeaturedProject;