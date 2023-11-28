
//filledAmount(10,20)higher mumber means more of the map is water.//

//=========================//
let iterator = 1000;
let zoom;
let abs;
let polySynth;
let pause = true;
let clouds = [];
let sign = 1;
let darkness = 0;
let dayNight = false;
//=========================//


class cloud {
    constructor(position, size, transparency) {
        this.position = position;
        this.size = size;
        this.transparency = transparency;
    }
}

function preload() {
    pauseSound = loadSound('assets/sounds/sensitone-steel-snare-99904.mp3');
    soundFormats('mp3', 'ogg');
}

function setup() {
    createCanvas(600, 600);
    polySynth = new p5.PolySynth();
    abs = new BeatStep("Arturia BeatStep");
    for(let i = 0; i < 16; ++i) {
        abs.pads[i] = -1;
    }
    abs.dials[0] = 0.01; 
    abs.dials[1] = 64;
    abs.dials[3]= 64;
  }
  
function draw() {
    let zoom = map(abs.dials[0], 0, 127, 0.005, 0.02) ;
    let filledAmount = map(abs.dials[1], 0, 127, 0.53, 1.15);
    let step = map(abs.dials[2], 0, 127, 3, 0.01);
    let darknessSpeed = map(abs.dials[3],0,127,0,4);
 
    Pause();
    if(!pause) {
        iterator += step;
    } 
    coolmap(zoom,filledAmount,iterator);
    playCycle();
    if(dayNight) {
        solar(darknessSpeed,darkness);
    } 
}

function coolmap(noiseScale,noiseLevel,iterator) {
    for(let y = 0; y < height; y += 3) {
        for(let x = 0; x < width; x += 3) {
            let nx = noiseScale * x;
            let ny = noiseScale * y; 
            let nt = iterator/100;
            let c = (noiseLevel) * noise(nx,ny,nt);
            drawTile(c,x,y,texture);
        }
    }
}

function Pause() {
    if(abs.pads[0] != -1) {
        if(pause) {
            pause = false;  
        }
        else {
            pause = true;
        }
        abs.pads[0] = -1;
        pauseSound.play();
    }
}

function spawn() {
    if(abs.pads[8] != -1) {
        coords = position(-10,);
        newCloud = cloud();
        clouds.push_back()
    }
}

function drawTile(c,x,y) {

    switch(floor(c*20)) {
        case 0:
            //tall hill 
            fill(c * 600, c * 600, c * 600);
            break;
        case 1: 
            fill(c * 600, c * 800, c * 600);
            break;
        case 2:
            //dark grass
            fill(c*400, c*800, c*150);
            break; 
        case 3:
            fill(c*600, c*850, c*250);
            break; 
        case 4:
            //light grass
            fill(c * 680, c * 900, c * 300);
            break;
        case 5:
            fill(c * 700, c * 875, c * 300);
            break;
        case 6:
            //sand
            fill(c*900, c * 900, c * 200);
            break;
        default:
            //water
            fill(150/(c*6),200/(c*4),400/(c*2));
            break;
    }

  noStroke();
  square(x,y,3);
}

function solar(darknessSpeed){
    fill(0,0,30,darkness*5);
    rect(0,0,width,height);
    if(darkness >= 40) {
        sign *= -1;
    }
    else if(darkness < 0) {
        sign *= -1;
    }
    darkness = darkness + darknessSpeed * sign;
}

function playCycle() {
    if(abs.pads[1] != -1) {
        if(dayNight) {
            dayNight = false;
            darkness = 0;
        }
        else {
            dayNight = true;
        }
        abs.pads[1] = -1;
        pauseSound.play();
    }
}