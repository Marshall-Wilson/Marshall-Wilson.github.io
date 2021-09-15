import React from 'react'

/* ProjectSquare
 *  Individual project component used in ProjectSelector
 *  Takes 1 prop containing a project object (see ../scripts/projects.js)
 */
const ProjectSquare = ({project}) => {

    return (
        <div className="project">
            <a href={project.url}>
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
            </a>
        </div>
    )
}

export default ProjectSquare
