import React from 'react'
import HeadshotFrame from "../components/HeadshotFrame"
import "../styles/about.css"
import resume from "../images/resume.pdf"

/* About.jsx
 *  Full about page component
 *  Takes no props
 */
const About = () => {

    let user = "w.marshall.wilson";
    let domain = "gmail.com";

    return (
        <div id="about">
            <div className="profile">
                <HeadshotFrame />
                <div className="blurb">
                    <p>Hi! I'm <span>Marshall Wilson</span>, a software engineer who graduated from the Tufts University Computer Science Post-Bac program in August 2021. This site contains some of my personal, professional, and class projects, so feel free to look around.</p>
                    <p>Prior to my time at Tufts, I studied Biology at Dartmouth College, worked as a science educator and coordinator at the Museum of Science and MIT, and have even been a baker, winemaker, and farmer. I'd love to bring my coding skills and experience to your team!</p>
                    <p className="email">email: <a href={"mailto:" + user + "@" + domain}>{user + "@" + domain}</a></p>
                    <div className="mediaLinks">
                        <a href={resume} download="Marshall Wilson Resume.pdf">Resume</a>
                        <a href="https://github.com/Marshall-Wilson">GitHub</a>
                        <a href="https://www.linkedin.com/in/w-marshall-wilson/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
