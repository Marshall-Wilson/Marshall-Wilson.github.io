import React, {useState} from 'react'
import "../styles/generator.css"
import generateFarmName from '../scripts/generator'

/* FarmNameGenerator
 *  Full page component, which displays a new plausible organic farm name each
 *      time a button is pressed
 *  Currently not linked from main page, but can be accessed at /generator path
 *  Takes no props
 */
const FarmNameGenerator = () => {

    const [farmName, setFarmName] = useState(null);

    const clickHandler = () => {
        setFarmName(generateFarmName());
    }

    return (
        <div id="generator">
            <h2>Organic Farm Name Generator</h2>
            <button type="button" onClick={clickHandler}>Generate New Farm Name</button>
            {farmName ? 
                <div id="farm">
                    <p id="farm_name">{farmName}</p>
                </div>
                : null}
        </div>
    )
}

export default FarmNameGenerator
