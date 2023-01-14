const container = document.querySelector(".container");
let girdNumber = 16;

function createGrid(){
    for(let i = 0; i < girdNumber*girdNumber; i++){
        const grid = document.createElement('div');
        grid.style.width = 480/girdNumber + "px";
        grid.style.height = 480/girdNumber + "px";
        grid.classList.add("grid");
        grid.setAttribute("id", "grid"+i);
        container.appendChild(grid);
    }
}

function deleteGrid(){
    const grid = Array.from(document.querySelectorAll(".grid"));
    grid.forEach(gridBox => {
        document.getElementById(gridBox.id).remove();
    });
}

function addEffect() {
    const gridboxes = Array.from(document.querySelectorAll(".grid"));
    gridboxes.forEach(box => {
        box.addEventListener("mouseover", function() {
            document.getElementById(box.id).style.backgroundColor = "rgb(" + Math.floor(Math.random()*256) + ", " + 
                                                                    Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
    })});
}

function onClick(){
    girdNumber = prompt("Please enter number of squares per side", "16");
    deleteGrid();
    createGrid();
    addEffect();
}

createGrid();
addEffect();