import React from 'react'

const Header = () => {
    return (
        <header>
            <h1 id="logo">
                Marshall Wilson
            </h1>
            <nav>
                <a href="./index.html" className="nav-links current-link">work</a>
                <a href="./index.html" className="nav-links">about</a>
            </nav>
        </header>
    )
}

export default Header
