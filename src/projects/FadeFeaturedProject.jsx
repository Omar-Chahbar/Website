import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import './FadeFeatureProject.scss';

const FadeFeaturedProject = ({project}) => (
    <div className="project-container">
        <Fade left>
            <div className="project">
                <div className="project-content">
                    <div className="project-label">{project.label}</div>
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-details">
                        <Fade left duration={1750}>
                            <p>{project.details}</p>
                        </Fade>
                        <ul>
                            {project.languages.map((lang => <li>{lang}</li>))}
                        </ul>
                        <a href={project.link}><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>

                <div className={project.className}>
                </div>
            </div>
        </Fade>
    </div>
);

FadeFeaturedProject.propTypes = {
    project: PropTypes.shape({
        label: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        languages: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }),
    count: PropTypes.number.isRequired,
};

export default FadeFeaturedProject;