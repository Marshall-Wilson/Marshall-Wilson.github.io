const frame = () => {
    if (running) {
        for (let i = 0; i < stops.length - 1; i++) {
            stops[i] = stops[i + 1];
        }
        frameRule++;
        if (frameRule === changeFrequency) {
            frameRule = 0;
            stops[stops.length - 1] = incrementColor(stops[stops.length - 2]);
        } else {
            stops[stops.length - 1] = stops[stops.length - 2];
        }
        document.getElementById("background").style.backgroundImage =
            makeGradient();
        document.getElementById("swatchColor").style.backgroundColor =
            `rgb(${stops[0][0]}, ${stops[0][1]}, ${stops[0][2]})`;
        document.getElementById("rVal").innerHTML = stops[0][0];
        document.getElementById("gVal").innerHTML = stops[0][1];
        document.getElementById("bVal").innerHTML = stops[0][2];
    } else {
        clearInterval(id);
    }
}

const incrementColor = input => {
    let output = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        output[i] = input[i] + rgbIncs[i]
        if (output[i] > rgbMax || output[i] < rgbMin) {
            rgbIncs[i] *= -1;
        }
    }
    return output;
}

const runAnimation = () => {
    let bg = document.getElementById("background").style;
    bg.backgroundImage = makeGradient();
    let id = null;
    clearInterval(id);
    id = setInterval(frame, frameRate);
}

const makeGradient = () => {
    let gradient = "linear-gradient(to bottom right ";
    for (let i = 0; i < stops.length; i++) {
        gradient += ", ";
        gradient += `rgb(${stops[i][0]}, ${stops[i][1]}, ${stops[i][2]})`;
    }
    gradient += ")";
    return gradient;
}

const pausePlay = () => {
    running = !running;
}


let rgbIncs = [3, 4, 5];
let running = true;
let frameRule = 0;

const changeFrequency = 1;
const stopNumber = 10;
const rgbMax = 250; //rgbMax + any rgbInc value cannot exeed 255
const rgbMin = 50;
const frameRate = 75;


let stops = [];
for (let i = 0; i < stopNumber; i++) {
    stops.push([rgbMin, rgbMax, rgbMin]);
}
document.getElementById("background").addEventListener("click", pausePlay);
runAnimation();