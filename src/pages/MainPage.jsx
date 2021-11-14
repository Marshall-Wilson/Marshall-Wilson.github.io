import React from 'react'
import {Redirect} from 'react-router-dom'
import Header from "../components/Header"
import ProjectSelector from "../components/ProjectSelector"
import "../styles/App.css"

const MainPage = () => {

    if (window.location.search !== "") {
        return <Redirect to="/explorer" />
    }

    return (
        <div id="Index">
            <Header selected="work"/>
            <ProjectSelector />
        </div>
    )
}

export default MainPage
