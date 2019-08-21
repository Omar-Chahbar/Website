import React from 'react';
import FeaturedProject from "./FeaturedProject";

const FeaturedProjects = ({projects}) => (
    projects.map(project =>
        <FeaturedProject project={project}/>
    )
);

export default FeaturedProjects;