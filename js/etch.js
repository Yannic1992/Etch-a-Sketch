const container = document.querySelector(".container");
let girdNumber = 16;

function createGrid(){
    for(let i = 0; i < girdNumber*girdNumber; i++){
        const grid = document.createElement('div');
        grid.style.width = 480/girdNumber + "px";
        grid.style.height = 480/girdNumber + "px";
        grid.classList.add("grid");
        grid.setAttribute("id", "grid"+i);
        grid.style.backgroundColor = "rgb(255, 255, 255)";
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
        const colorFader = 100;
        box.addEventListener("mouseover", function() {
            switch(document.getElementById(box.id).style.backgroundColor) {
                case "rgb(255, 255, 255)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(230, 230, 230)";
                    break;
                case "rgb(230, 230, 230)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(204, 204, 204)";
                    break;
                case "rgb(204, 204, 204)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(179, 179, 179)";
                    break;
                case "rgb(179, 179, 179)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(153, 153, 153)";
                    break;
                case "rgb(153, 153, 153)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(128, 128, 128)";
                    break;
                case "rgb(128, 128, 128)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(102, 102, 102)";
                    break;
                case "rgb(102, 102, 102)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(77, 77, 77)";
                    break;
                case "rgb(77, 77, 77)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(51, 51, 51)";
                    break;
                case "rgb(51, 51, 51)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(26, 26, 26)";
                    break;
                case "rgb(26, 26, 26)":
                    document.getElementById(box.id).style.backgroundColor = "rgb(0, 0, 0)";
                    break;
                default:
                    document.getElementById(box.id).style.backgroundColor = "rgb(255, 255, 255)";
                    break;
            }
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