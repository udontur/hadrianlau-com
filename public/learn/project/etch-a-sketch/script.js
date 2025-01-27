let numberOfBlocks = prompt("How big is the canvas? (Recommended: 32, Max: 96)");
while(!(numberOfBlocks>=0&&numberOfBlocks<=96)){
    if(numberOfBlocks>96) numberOfBlocks=prompt("WAY Too big! (Max: 96)");
    else numberOfBlocks=prompt("Negative blocks? Imaginary... ");
}

generateCanvas(numberOfBlocks);

let clearCanvasBtn=document.querySelector(".clearCanvas");
clearCanvasBtn.addEventListener("click", clearCanvas);

function clearCanvas(){
    let canvas = document.querySelector(".canvas");
    let card=document.querySelector(".card");
    let newCanvas=document.createElement("div");
    newCanvas.classList.add("canvas");
    canvas.remove();
    card.appendChild(newCanvas);
    generateCanvas(numberOfBlocks);
}

function getRandomValue(maxValue){
    return Math.floor(Math.random()*maxValue);
}

function generateCanvas(numberOfBlocks) {
    let canvas = document.querySelector(".canvas");
    for (let i = 0; i < numberOfBlocks; i++) {
        let currentLine = document.createElement("div");
        currentLine.classList.add("line");
        for (let j = 0; j < numberOfBlocks; j++) {
            let currentBlock = document.createElement("div");
            currentBlock.classList.add("block");
            currentBlock.addEventListener("mouseover", () => {
                let colorR=getRandomValue(255).toString(16);
                let colorG=getRandomValue(255).toString(16);
                let colorB=getRandomValue(255).toString(16);
                currentBlock.style.backgroundColor = "#"+colorR+colorG+colorB;
            });
            currentLine.appendChild(currentBlock);
        }
        canvas.appendChild(currentLine);
    }
}

