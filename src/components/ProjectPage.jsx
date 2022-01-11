import React from 'react'
import "../styles/descriptions.css"


const ProjectPage = ({projectInfo}) => {
    return (
        <div className="projectDescriptionPage">
            <div className="projectDescription">
                <h1>{projectInfo.title}</h1>
                {projectInfo.description.map(p => <p>{p}</p>)}
                <div className="projectLinks">
                    {projectInfo.links.map(link => (
                        <div>
                            <a href={link.href} target="_blank">{link.name}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="projectImageContainer">
                {projectInfo.images.map(image => <img src={image.src} alt={image.alt}/>)} 
            </div>
        </div>
    )
}

export default ProjectPage
