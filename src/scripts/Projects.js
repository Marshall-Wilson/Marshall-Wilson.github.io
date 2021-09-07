import trex from "../images/trex.jpg"
import um from "../images/um.png"
import network from "../images/network.jpg"
import colors from "../images/colors.png"
import farm from "../images/farm.jpg"
import cat from "../images/cat.jpg"
import rpn from "../images/rpn.jpg"



const projectConstructor = (name, types, url, image) => {
    return {
        name: name,
        types: types,
        url: url,
        image: image
    }
}

const Projects = [
    projectConstructor("Museum Employee Scheduler", ["all", "python"],
        "https://github.com/Marshall-Wilson/employee_scheduler", trex),
    projectConstructor("Universal Machine Emulator", ["all", "c"],
        "https://github.com/Marshall-Wilson/UM-Emulator", um),
    projectConstructor("Musical Collaboration Explorer", ["all", "c++"],
        "https://github.com/Marshall-Wilson/collaboration-explorer", network),
    projectConstructor("Color Picker Animation", ["all", "javascript"],
        "/colors", colors),
    projectConstructor("Organic Farm Name Generator", ["all", "javascript"],
        "/generator", farm),
    projectConstructor("PNM Image Manipulation", ["all", "c"],
        "/pnm", cat),
    projectConstructor("RPN Calculator", ["all", "c"],
        "/rpn", rpn)
]



export default Projects