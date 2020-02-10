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
            square.addEventListener('mouseover', () => {
                square.classList.add("hover");
            });
            row.appendChild(square);
        }
    }
}