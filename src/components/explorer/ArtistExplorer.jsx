import React, { useEffect, useState } from 'react'
import { generatePlaylist, generateToken } from '../../scripts/spotifySearch'
import Traverser from './Traverser';
import Input from './Input';

// Retrieves access token and playlist info from Spotify callback
const query = window.location.search
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});

// Main component for the spotify artist explorer 
function ArtistExplorer() {
    const [code, setCode] = useState(null); //Spotify access token request code
    const [startName, setStartName] = useState(''); //starting artist
    const [endName, setEndName] = useState(''); //ending artist
    const [searching, setSearching] = useState(false); //whether search is currently happening
    const [playlistID, setPlaylistID] = useState(null); //stores playlist id once generated

    // On load check hash for access token
    useEffect(() => {
        if (query.code && query.state) {
            setCode(query.code);
        }
    }, [])


    // If access token and playlist info are available, generate playlist for user
    useEffect(() => {
        if (code && query.state) {
            let songList = query.state.split('-').filter(elmt => elmt !== "");
            console.log("getting token")
            generateToken(code)
            .then(res => {
                console.log(res);
                generatePlaylist(res.access_token, songList)
                .then(res => setPlaylistID(res));
            })
        }
    }, [code])


    // Click handler for initial input
    const beginSearch = () => {
        setSearching(true);
    }

    return ( 
        <div className = "artist-explorer" >
            {code ? // if user token is available, display post-playlist info
                <div className='playlist-added'>
                    <h1> Playlist Added </h1> 
                    <a className='playlist-button' href={`https://open.spotify.com/playlist/${playlistID}`} target='_blank' rel="noopener noreferrer">
                        <p>Open Spotify?</p>
                    </a>
                </div>: 
                searching ? 
                    <Traverser startName={startName} endName={endName}/>:
                    <Input setStartName={setStartName} setEndName={setEndName} beginSearching={beginSearch}/>
                
            } 
        </div>
    );
}

export default ArtistExplorer;