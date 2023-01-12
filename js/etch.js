const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    const grid = document.createElement('div');
    grid.classList.add("grid");
    grid.setAttribute("id", "grid"+i);
    container.appendChild(grid);
    /*Remove comment here and at float: left; in css file for using float/clear
    if(i>0 && i%16==0){
        grid.style.clear = "left";
    }*/
}


const gridboxes = Array.from(document.querySelectorAll(".grid"));
gridboxes.forEach(box => {
    //console.log("ID: " + box.id);
    box.addEventListener("mouseover", function() {
        //console.log("ID Neu: " + box.id);
        document.getElementById(box.id).style.backgroundColor = "black";
})});
