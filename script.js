//general Variables
let gridSize = 40;
let widthContent = 700;

//HTMl-Variables
const centerContent = document.querySelector(".centerContent");
const resetButton = document.querySelector("button");



function makeGrid(gridSize, widthContent) {

    let widthBox = (widthContent / gridSize) - 2 + "px";
    let numberBoxes = gridSize * gridSize;

    for (let i = 0; i < numberBoxes; i++) {
        const gridBox = document.createElement("div");
        gridBox.setAttribute("id", "gridBox" + i);
        gridBox.setAttribute("class", "gridBox");
        gridBox.style.height = widthBox;
        gridBox.style.width = widthBox;
        centerContent.appendChild(gridBox);

        gridBox.addEventListener("mouseenter", () =>{
        gridBox.style.backgroundColor = "black";
        });
    }
}

function removeGrid() {

    let boxes = document.querySelectorAll(".gridBox");

    boxes.forEach(element => {
        element.remove();
    });

}

resetButton.addEventListener("click", () => {
    let userInput = prompt("Please enter new grid-Size:", "40");
    gridSize = userInput;
    removeGrid();
    makeGrid(gridSize, widthContent);


});


makeGrid(gridSize, widthContent);