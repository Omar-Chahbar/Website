import React from 'react';
import './Project.scss';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Project = () => (
            <div className="project-container">
                <div className="project">
                    <div className="project-content">
                        <div className="project-label">Featured Project</div>
                        <h4 className="project-title">Sudoku Solver</h4>
                        <div className="project-details">
                            <p>A project I made that takes in an incomplete Sudoku puzzle as input and returns the
                            solved puzzle. The solving algorithm uses Breadth first search to limit options and then depth first search to solve the puzzle</p>
                            <ul>
                                <li>Python</li>
                            </ul>
                            <a href="https://github.com/Omar-Chahbar/SudokuSolver"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>

                    <div className="project-img">
                    </div>

                </div>
            </div>
);

export default Project;