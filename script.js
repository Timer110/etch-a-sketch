//general Variables
let gridSize = 40; //initial default GridSize
const widthContent = 700; //width of Container, cannot be changed!

//HTMl-Variables
const centerContent = document.querySelector(".centerContent");
const resetButton = document.querySelector("button");



function makeGrid(gridSize, widthContent) {

    let widthBox = (widthContent / gridSize) - 2 + "px";
    let numberBoxes = gridSize * gridSize;

    for (let i = 0; i < numberBoxes; i++) {
        const gridBox = document.createElement("div");
        let opac = 0;
        gridBox.setAttribute("id", "gridBox" + i);
        gridBox.setAttribute("class", "gridBox");
        gridBox.style.height = widthBox;
        gridBox.style.width = widthBox;
        gridBox.style.opacity = opac;
        centerContent.appendChild(gridBox);

        gridBox.addEventListener("mouseenter", () => {
        opac += 0.1;
        gridBox.style.backgroundColor = "black";
        gridBox.style.opacity = opac;
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
    let userInput = prompt("Please enter new grid-Size (Max. 100):", "40");

    if (userInput <= 100) {
    gridSize = userInput;
    removeGrid();
    makeGrid(gridSize, widthContent);
    };
    if (userInput > 100) {
        alert("Gridsize can be max. 100x100. Please try again!")
    };

});


makeGrid(gridSize, widthContent);