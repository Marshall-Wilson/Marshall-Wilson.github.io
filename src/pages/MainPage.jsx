import React from 'react'
import {Redirect} from 'react-router-dom'
import ProjectSelector from "../components/ProjectSelector"
import "../styles/App.css"

const MainPage = () => {

    if (window.location.search !== "") {
        return <Redirect to="/explorer" />
    }

    return (
        <div id="Index">
            <ProjectSelector />
        </div>
    )
}

export default MainPage
