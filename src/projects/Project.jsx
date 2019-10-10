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
        details: "This is an application I designed and built for a physiotherapy clinic during my third year at Western University. The website brings the benefits of going to a physiotherapist to the comfort of one's home by providing features like a login system, video conferencing, online tests that the patient can take, and an exercise player.",
        languages: ["MongoDB", "Node", "Express", "EmberJS"],
        link: "https://github.com/Omar-Chahbar/cron-calculator",
        className: "project-img marcotte",
    },
    {
        label: "Featured Project",
        title: "Sudoku Solver",
        details: "A project I made that takes in an incomplete Sudoku puzzle as input and returns the solved puzzle. The solving algorithm uses a modified depth first search to solve the puzzle",
        languages: ["Python"],
        link: "https://github.com/Omar-Chahbar/SudokuSolver",
        className: "project-img sudoku",
    },
    {
        label: "Featured Project",
        title: "This website!",
        details: "I designed and built this website to showcase some of my work and tell you a little bit about myself. I'm using AWS Amplify and AWS Route53 for deployment and hosting",
        languages: ["React", "Bootstrap", "AWS"],
        link: "https://github.com/Omar-Chahbar/Website",
        className: "project-img website",
    },
];

export default Project;