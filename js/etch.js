const container = document.querySelector('.container');

for(let i = 0; i < 256; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    /*Remove comment here and at float: left; in css file for using float/clear
    if(i>0 && i%16==0){
        grid.style.clear = 'left';
    }*/
}
