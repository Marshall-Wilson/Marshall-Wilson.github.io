import React from 'react'


const ProjectSquare = ({project}) => {

    return (
        <div className="project">
            <a href={project.url} rel="noreferrer" target="_blank">
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
            </a>
        </div>
    )
}

export default ProjectSquare
