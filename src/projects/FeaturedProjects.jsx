import React from 'react';
import FeaturedProject from "./FeaturedProject";

const FeaturedProjects = ({projects}) => (
    projects.map(project => {
        const count = 0;
        return <FeaturedProject project={project} count={count}/>
    })
);

export default FeaturedProjects;