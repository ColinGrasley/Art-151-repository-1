let AmountOfElements = 100;
let elementArray = [];


function setup() {
    createCanvas(750,730);
    fillArray();

}

function draw() {
    noLoop();
    background(0);
    mixArray();
    drawArray();
}

function drawArray() {
    fill(255);
    for(let i = 0; i < AmountOfElements; i+=1) {
        rect(23+i*7,600,6,-(elementArray[i])*5);
    }
}

function fillArray() {
    for(let i = 0; i < AmountOfElements; ++i) {
        elementArray.push(i);
    }
}

function mixArray() {
    for(let i = 0; i < AmountOfElements; ++i) {
        let rand = floor(random(1,100));
        elementArray[i] = rand; 
    }
}

function selectionSort() {
      for(let i = 0; i < AmountOfElements; ++i) {
            for(let j = 0; j < AmountOfElements; ++j) {
                
            }
      }
}