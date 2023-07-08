console.log("hello from script.js");
let gridSize = 16;

const containerDiv = document.querySelector(".container");

function getGridSize(){
    gridSize = prompt("Enter Grid Size : ");
    if(gridSize > 100) gridSize = 100;
    makeGrid();
}

function random(n=255){
    return Math.floor(Math.random() * n);
}

function makeGrid(){
    const sizep = document.querySelector("#currentSize");
    sizep.innerText = `${gridSize}x${gridSize}`;

    containerDiv.innerHTML = "";
    for(let i=0;i<gridSize;i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for(let j=0;j<gridSize;j++){
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            let redVal = random(), greenVal = random(), blueVal = random();
            squareDiv.addEventListener('mouseover',(e) => squareDiv.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`);
            squareDiv.addEventListener('mouseenter',(e) => squareDiv.style.opacity = Number(squareDiv.style.opacity) + 0.1);
            rowDiv.appendChild(squareDiv);
        }
        containerDiv.append(rowDiv);
    }    
}

