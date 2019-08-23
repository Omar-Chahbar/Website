import React from 'react';
import './Project.scss';
import FeaturedProjects from "./FeaturedProjects";

const Project = () => (
    <FeaturedProjects projects={projects}/>
);

const projects = [
    {
        label: "Featured Project",
        title: "Marcotte Physiotherapy",
        details: "This is an application I built for a physiotherapy clinic as my third year final project at Western University. It's a portal that lets patients communicate with their physiotherapists. It features a login system, video conferencing, online tests that the patient can take, and an exercise player.",
        languages: ["MongoDB", "Node", "Express", "EmberJS"],
        link: "https://github.com/Omar-Chahbar/cron-calculator",
        className: "project-img sudoku",
    },
    {
        label: "Featured Project",
        title: "Sudoku Solver",
        details: "A project I made that takes in an incomplete Sudoku puzzle as input and returns the solved puzzle. The solving algorithm uses Breadth first search to limit options and then depth first search to solve the puzzle",
        languages: ["Python"],
        link: "https://github.com/Omar-Chahbar/SudokuSolver",
        className: "project-img sudoku",
    },
    {
        label: "Featured Project",
        title: "Cron Tab Calculator",
        details: "An API that accepts information on how often you want a process to run and gives you a syntactically correct Crontab to run that task",
        languages: ["Java", "Spring", "Jackson"],
        link: "https://github.com/Omar-Chahbar/cron-calculator",
        className: "project-img sudoku",
    },
];

export default Project;