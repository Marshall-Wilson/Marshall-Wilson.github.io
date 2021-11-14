import React, {useState} from 'react'
import '../styles/ArtistExplorer.css';
import ArtistExplorer from '../components/explorer/ArtistExplorer'
import About from '../components/explorer/About'
import Nav from '../components/explorer/Nav'

const ExplorerContainer = () => {
    const [page, setPage] = useState('main');

    // Sets the current page choice. 'main' or invalid choices refresh page to base state
    const newPageChoice = (name) => {
        setPage(name);
    }

    const GetPage = () => {
        if (page === 'main') {
            return <ArtistExplorer />
        } else if (page === 'about') {
            return <About />
        } else {
            return <p>Error: Please Reload Page</p>
        }
    }

    return (
        <div className="explorer-container">
            <Nav clickHandler={newPageChoice}/>
            <GetPage />
            <footer>
                <p> Marshall Wilson 2021 | <a href = "http://www.marshallwilson.info" > www.marshallwilson.info </a></p>
            </footer> 
        </div>
    )
}

export default ExplorerContainer
