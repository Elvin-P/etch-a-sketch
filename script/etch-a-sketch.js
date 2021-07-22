const grid = document.querySelector(".grid-container");
const buttons = document.querySelectorAll('.options');
let gridSize = 10;
let color = 'black';
let rainbow = false;

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

const draw = function(e) {
    if (!rainbow)
        this.style['background-color'] = color;
    else {
        this.style['background-color'] = random_rgb();
    }
}

const clear = () => {
    let elements = document.querySelectorAll('.element');
    elements.forEach(element => element.remove());
}

const buttonClick = function(e) {
    console.log(`Node ${this.id} fired`);
    switch(this.id) {
        case 'clear':
            gridInit();
            break;
        case 'color':
            colorHandler(this)
            break;
        case 'rainbow':
            rainbow = !rainbow;
            break;
        case 'range':
            gridSize = this.value;
            gridInit();
            break;
    }
}

const colorHandler = function(node) {
    console.log(`Color changed to: ${node.value}`);
    color = node.value;
}

const gridInit = function() {
    clear();
    grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
                          grid-template-rows: repeat(${gridSize}, 1fr);`
    ;
    for(let i = 0; i < gridSize*gridSize; ++i) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('element');
        gridElement.style['background-color'] = 'white';
        gridElement.addEventListener('mouseover', draw)
        grid.appendChild(gridElement);
    }
}

buttons[0].addEventListener('click', buttonClick);
buttons[1].addEventListener('change', buttonClick);
buttons[2].addEventListener('click', buttonClick);
buttons[3].addEventListener('change', buttonClick);

gridInit();