import React from 'react' 
import ProjectPage from "../components/ProjectPage.jsx"

const DragDraft = () => {
    const dragInfo = {
        title: "Full-Stack Fantasy Draft",
        description: [
            `This full-stack website was created to allow a friendly fantasy draft 
            of the contestants on RuPaul's Drag Race Season 14. Users can 
            choose their team of 5 contestants, and over the season, the 
            app will maintain a leaderboard and point summaries of all the 
            users and each of the queens on their team.`,
            `This app was created using the PERN stack: PostgreSQL, Express.js, 
            React.js, and Node.js. `
        ],
        links: [
            {
                name: "Github",
                href: "https://github.com/Marshall-Wilson/DragDraft2022"
            },
            {
                name: "Heroku",
                href: "https://drag-draft-2022.herokuapp.com/"
            }
        ],
        images: [
            {
                src: "./images/drag_draft_menu.png",
                alt: "Drag Draft Homepage"
            },
            {
                src: "./images/drag_draft_queens.png",
                alt: "Drag Draft Queens List"
            },
            {
                src: "./images/drag_draft_teams.png",
                alt: "Drag Draft Team Menu"
            }
        ]
    }
    return (
        <ProjectPage projectInfo={dragInfo} />
    )
}

export default DragDraft
