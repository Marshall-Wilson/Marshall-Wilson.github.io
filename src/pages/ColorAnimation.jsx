import React, {useState} from 'react'
import "../styles/colors.css"
import useInterval from "../scripts/useInterval"

const CHANGEFREQUENCY = 1;
const NUMCOLORS = 10;
const RGBMAX = 250; //rgbMax + any rgbInc value cannot exeed 255
const RGBMIN = 50;
const FRAMERATE = 75;

const ColorAnimation = () => {

    // Helper Functions
    const incrementLastColor = colors => {
        let updatedIncs = rgbIncs;
        for (const [key] of Object.entries(colors[colors.length - 1])) {
            colors[colors.length - 1][key] += rgbIncs[key];
            if (colors[colors.length - 1][key] > RGBMAX || 
                colors[colors.length - 1][key] < RGBMIN) {
                updatedIncs[key] *= -1
            }
        }
        setIncs(updatedIncs);
        return colors;
    }
    
    const shiftColors = colors => {
        colors.push(Object.assign({}, colors[colors.length-1]));
        colors.shift();
        return colors;
    }
    
    const makeGradient = (colors) => {
        let gradient = "linear-gradient(to bottom right ";
        for (let i = 0; i < colors.length; i++) {
            gradient += ", ";
            gradient += `rgb(${colors[i].r}, ${colors[i].g}, ${colors[i].b})`;
        }
        gradient += ")";
        return {backgroundImage: gradient};
    }

    const handleClick = () => {
        setRunning(!running);
    }


    // State, local vars, and animation step
    const [colors, setColors] = useState(new Array(NUMCOLORS).fill({r: RGBMIN, g: RGBMAX, b: RGBMIN}));
    const [gradient, setGradient] = useState(makeGradient(colors));
    const [rgbIncs, setIncs] = useState({r: 3, g: 4, b: 5});
    const [frameRule, setFrameRule] = useState(0);
    const [running, setRunning] = useState(true);
    
    useInterval(() => {
        if (running) {
            let newColors = shiftColors(colors);
            if (frameRule % CHANGEFREQUENCY === 0) {
                newColors = incrementLastColor(newColors);
            }
            setFrameRule(frameRule + 1);
            setColors(newColors);
            setGradient(makeGradient(colors));
        }
    }, FRAMERATE)


    return (
        <div id="ColorAnimation" onClick={handleClick} style={gradient}>
            <h1><a href="/">Home</a></h1>
            <div id="colorInfo">
                <div id="swatchColor" style={{background: `rgb(${colors[0].r}, ${colors[0].g}, ${colors[0].b}`}}></div>
                <h1>Current Color</h1>
                <h2>R: <span className="colorVal" id="rVal">{colors[0].r}</span></h2>
                <h2>G: <span className="colorVal" id="gVal">{colors[0].g}</span></h2>
                <h2>B: <span className="colorVal" id="bVal">{colors[0].b}</span></h2>
            </div>
            <footer>
                <a href="/">Marshall Wilson 2021</a>
            </footer>
        </div>
    )
}

export default ColorAnimation
