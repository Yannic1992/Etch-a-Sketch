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
        /*Remove comment here and at float: left; in css file for using float/clear
        if(i>0 && i%16==0){
            grid.style.clear = "left";
        }*/
    }
}

function deleteGrid(){
    const grid = Array.from(document.querySelectorAll(".grid"));
    console.log(grid);
    grid.forEach(gridBox => {
        console.log(gridBox.id);
        document.getElementById(gridBox.id).remove();
        //document.getElementById(gridBox.id).style.backgroundColor = "red";
    });
}

function addEffect() {
    const gridboxes = Array.from(document.querySelectorAll(".grid"));
    gridboxes.forEach(box => {
        //console.log("ID: " + box.id);
        box.addEventListener("mouseover", function() {
            //console.log("ID Neu: " + box.id);
            document.getElementById(box.id).style.backgroundColor = "black";
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