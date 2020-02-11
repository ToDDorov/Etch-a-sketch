const wrapper = document.querySelector(".wrapper");
const DEFAULT_SIZE = 16;

createGrid(DEFAULT_SIZE);

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => row.parentNode.removeChild(row));

    let newSize = prompt("How many squares per side?");
    if (newSize == null) return;

    createGrid(newSize);
})

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("row");
        row.className = "row";
        wrapper.appendChild(row);

        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.className = "square";
            square.setAttribute("data-color", "");
            square.addEventListener('mouseover', onSquareHover);
            row.appendChild(square);
        }
    }
}

function onSquareHover(e) {
    let square = e.target;
    let color;

    if (square.dataset.color != "") {
        color = darkenColor(square.dataset.color);
    } else {
        color = getRandomHSLColor();
    }

    square.style.backgroundColor = color;
    square.setAttribute("data-color", color);
}

function getRandomHSLColor() {
    const hue = getRandomRange(0, 360);
    const sat = getRandomRange(0, 100);
    const light = getRandomRange(0, 100);

    return `hsl(${hue}, ${sat}%, ${light}%)`;
}

function getRandomRange(min, max) {
    return Math.floor(Math.random() * (1 + max - min)) + min;
}

function darkenColor(color) {
    const re = /(hsl\(\d{1,3}, \d{1,3}%, )(\d{1,3})%\)/;
    let light = parseInt(color.match(re)[2]);

    if (light - 10 > 0) light -= 10;
    else light = 0;

    let darkendedColor = color.replace(re, `$1${light}%)`);

    return darkendedColor;
}