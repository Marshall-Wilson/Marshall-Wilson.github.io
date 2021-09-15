import React from 'react'
import Header from "../components/Header"
import ProjectSelector from "../components/ProjectSelector"
import "../styles/App.css"

const MainPage = () => {
    return (
        <div id="Index">
            <Header selected="work"/>
            <ProjectSelector />
        </div>
    )
}

export default MainPage
