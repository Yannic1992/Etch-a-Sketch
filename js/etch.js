const container = document.querySelector('.container');

for(let i = 0; i < 256; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    
    if(i>0 && i%16==0){
        grid.style.clear = 'left';
    }
}
