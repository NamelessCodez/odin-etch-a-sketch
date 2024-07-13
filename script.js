function setUpGrid (squarePerSide) {
    // for a n by n grid, we need n*n divs
    const divNumber = squarePerSide * squarePerSide;
    const container = document.querySelector('.container');
    const containerSideLength = container.offsetHeight;
    const unitSideLength = containerSideLength / squarePerSide;
    for (let i = 0; i < divNumber; i++) {
        let unit = document.createElement('div');
        unit.classList.add('grid-unit');
        unit.setAttribute('style', `background-color: blue; height: ${unitSideLength}px; width: ${unitSideLength}px`);
        container.appendChild(unit);
    }
    setUpHover(container);
} 

function setUpHover(container) {
    const units = container.childNodes;
    units.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'red';
        });
    });
}

function main() {
    const squarePerSide = parseInt(prompt('Enter number of squares per side: (Limit = 100)'));
    if(squarePerSide > 100) {
        const display = document.querySelector('.container');
        display.textContent = 'Please refresh the page and enter a number less than or equal to 100';
    } else {
        setUpGrid(squarePerSide);
    }
}

main();
