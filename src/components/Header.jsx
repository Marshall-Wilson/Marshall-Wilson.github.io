import React from 'react'
import "../styles/header.css"

/* Header 
 *  Component with title and basic nav links
 *  "selected" prop can be "work", "about", or "" and will highlight the 
 *  appropriate link 
 */
const Header = ({selected}) => {
    return (
        <header id="header">
            <h1 id="logo">
                <a href="/">
                    Marshall Wilson
                </a>
            </h1>
            <nav>
                {selected === "work" ? 
                    <a href="/" className="nav-links current-link">work</a>
                :   <a href="/" className="nav-links">work</a>}
                {selected === "about" ? 
                    <a href="/about" className="nav-links current-link">about</a>
                :   <a href="/about" className="nav-links">about</a>}
                
            </nav>
        </header>
    )
}

export default Header
