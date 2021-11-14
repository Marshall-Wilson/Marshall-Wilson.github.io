import React from 'react'
import {Link} from 'react-router-dom'

//explorer nav bar
const Nav = ({clickHandler}) => {
    return (
        <div className="nav">
            <Link to="/"><h1>Spotify Artist Explorer</h1></Link>
            <div className="nav-links">
                <h2 onClick={() => clickHandler('main')}>Main</h2>
                <h2 onClick={() => clickHandler('about')}>About</h2>
            </div>
        </div>
    )
}

export default Nav
