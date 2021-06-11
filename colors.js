const frame = () => {
    for (let i = 0; i < 3; i++) {
        rgbCols[i] += rgbIncs[i];
        if (rgbCols[i] < 200 || rgbCols[i] > 250) {
            rgbIncs[i] *= -1;
        }
    }
    document.getElementById("background").style.backgroundColor =
        `rgb(${rgbCols[0]}, ${rgbCols[1]}, ${rgbCols[2]})`;
    document.getElementById("rVal").innerHTML = rgbCols[0];
    document.getElementById("gVal").innerHTML = rgbCols[1];
    document.getElementById("bVal").innerHTML = rgbCols[2];
}


const runAnimation = () => {
    let bg = document.getElementById("background").style;
    bg.backgroundColor = `rgb(${rgbCols[0]}, ${rgbCols[1]}, ${rgbCols[2]})`;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 200);
}

let rgbCols = [200, 200, 200];
let rgbIncs = [1, 2, 3];

document.getElementById("background").addEventListener("click", runAnimation);