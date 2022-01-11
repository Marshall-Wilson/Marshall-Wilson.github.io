import React from 'react'
import ProjectPage from "../components/ProjectPage.jsx"

const SpotifyExplorer = () => {
    const spotifyInfo = {
        title: "Spotify Artist Explorer",
        description: [
            `This project was meant to translate a previous C++ project, which 
            explored pre-establishes networks of artists and collaborations, 
            into the real world by incorporating the Spotify API`,
            `The app implements a breadth-first search of Spotify's related 
            artists feature, searching first through the related artists of the 
            starting artist, then through those artists' related artists, and 
            so on until it finds the ending artist.`
        ],
        links: [
            {
                name: "Github",
                href: "https://github.com/Marshall-Wilson/spotify-artist-explorer"
            },
            {
                name: "Heroku",
                href: "http://spotify-explorer-hero.herokuapp.com/"
            }
        ],
        images: [
            {
                src: "./images/spotify_home.png",
                alt: "Spotify Explorer Homepage"
            },
            {
                src: "./images/spotify_search.png",
                alt: "Spotify Explorer Searching"
            },
            {
                src: "./images/spotify_result.png",
                alt: "Spotify Explorer Results"
            }
        ]
    }

    return (
        <div>
            <ProjectPage projectInfo={spotifyInfo} />
        </div>
    )
}

export default SpotifyExplorer
