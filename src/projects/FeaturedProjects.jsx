import React from 'react';
import FadeFeaturedProject from "./FadeFeaturedProject";

const FeaturedProjects = ({projects}) => {
    let count = 0;
    return projects.map(project => {
        count++;
        return <FadeFeaturedProject project={project} count={count}/>
    });
};

export default FeaturedProjects;