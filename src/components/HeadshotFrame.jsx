import React from 'react'
import headshot from "../images/headshot.jpeg"


/* HeadshotFrame
 *  Component containing a polaroid-like frame with a headshot 
 *  Takes no props
 */
const HeadshotFrame = () => {
    return (
        <div className="headshotFrame">
            <img className="headshot" src={headshot} alt="Marshall Wilson"></img>
        </div>
    )
}

export default HeadshotFrame
