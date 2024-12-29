//general Variables
let gridSize = 16;
let widthContent = 700;

//HTMl-Variables
const centerContent = document.querySelector(".centerContent");

function makeGrid(gridSize, widthContent) {

    let widthBox = (widthContent / gridSize) - 2 + "px";
    console.log(widthBox);

    for (let i = 0; i < 256; i++) {
        const gridBox = document.createElement("div");
        gridBox.setAttribute("id", "gridBox" + i);
        gridBox.setAttribute("class", "gridBox");
        gridBox.style.height = widthBox;
        gridBox.style.width = widthBox;
        centerContent.appendChild(gridBox);
    }
}

makeGrid(gridSize, widthContent);



//change the girdSize doesnt work...