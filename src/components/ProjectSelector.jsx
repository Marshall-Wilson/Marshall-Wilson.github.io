import React, {useState} from 'react'
import PROJECTS from "../scripts/Projects"
import ProjectSquare from "./ProjectSquare"

let BUTTONS = [{name: "All", selected: true}, 
                {name: "Python", selected: false},
                {name: "JavaScript", selected: false}, 
                {name: "C++", selected: false},
                {name: "C", selected: false}]


/* ProjectSelector
 *  Component which creates a gallery of projects from the PROJECTS list and 
 *      and a line of buttons from the BUTTONS list. When pressed, each button
 *      filters the projects based on their "types" values
 *  Takes no props
 */
const ProjectSelector = () => {
    const [projects, setProjects] = useState(PROJECTS);
    const [buttons, setButtons] = useState(BUTTONS);
    
    const applyFilter = type => {
        setProjects(PROJECTS.filter(project => project.types.includes(type.toLowerCase())));
        setButtons(BUTTONS.map((button) => {
            if (button.name === type) {
                button.selected = true;
            } else {
                button.selected = false;
            }
            return button;
        }))
    }

    return (
        <div >
            
            <div className={"selector"}>
                {buttons.map((selectorButton) => {
                            return (
                                <button className={selectorButton.selected ? "selected" : ""} 
                                    type="button" 
                                    id={selectorButton.name} 
                                    key={selectorButton.name}
                                    onClick={() => applyFilter(selectorButton.name)}>
                                        <h2>{selectorButton.name}</h2>
                                 </button>
                            )
                        }
                    )
                }
            </div>
            <div className={"projects"}>
                {projects.map((project) => {
                    return (
                        <ProjectSquare project={project} key={project.name} />
                    )
                }
                )}
            </div>
            
        </div>
    )
}

export default ProjectSelector
