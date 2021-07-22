const grid = document.querySelector(".grid-container");
const buttons = document.querySelectorAll('.options');
let gridSize = 10;
let color = 'black';


const draw = function(e) {
    this.style['background-color'] = 'white';
}

const clear = () => {
    let elements = document.querySelectorAll('.element');
    elements.forEach(element => element.style['background-color'] = 'black');
}

const buttonClick = function(e) {
    console.log(this.id);
    switch(this.id) {
        case 'clear':
            clear();
            break;
        case 'color':
            colorHandler(this)
            break;
    }
}

const colorHandler = function(node) {
    console.log(node.value);
    node.addEventListener('change', (e) => {
        color = node.value;
    })
}

grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
                        grid-template-rows: repeat(${gridSize}, 1fr);`;
;

for(let i = 0; i < gridSize*gridSize; ++i) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('element');
    gridElement.style['background-color'] = 'black';
    gridElement.addEventListener('mouseover', draw)
    grid.appendChild(gridElement);
}

buttons.forEach(button => button.addEventListener('click', buttonClick))