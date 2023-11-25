
//filledAmount(10,20)higher mumber means more of the map is water.//

//=========================//
let change = true;
let iterator = 1000;
let slider;
let slider2;
let manual = false;
let zoom ;
let abs;
let polySynth;
let pause = true;
let flatness = 1;
let totAve = 0;
let num0 = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let other = 0;
//=========================//

function preload() {
    pauseSound = loadSound('assets/sounds/sensitone-steel-snare-99904.mp3');
    soundFormats('mp3', 'ogg');
}


function setup() {
    createCanvas(600, 600);
    polySynth = new p5.PolySynth();
    abs = new BeatStep("Arturia BeatStep");
    abs.pads[0] = -1;
    abs.dials[0] = 0.01; 
    abs.dials[1] = 64;
  }
  
function draw() {
    let zoom = map(abs.dials[0], 0, 127, 0.005, 0.02) ;
    let filledAmount = map(abs.dials[1], 0, 127, 0.55, 2);
    let step = map(abs.dials[2], 0, 127, 3, 0.01);
    let texture = map(abs.dials[3],0,127,1,3);

    coolmap(zoom,filledAmount,iterator,texture);
    Pause();
    if(!pause) {
        iterator += step;
    }
}

function coolmap(noiseScale,noiseLevel,iterator,texture) {
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

        console.log("average: " ,totAve/other);
        console.log("zero: ", num0);
        console.log("one: ", num1);
        console.log("two: ", num2);
        console.log("three: ", num3);
        console.log("four: ", num4);
        console.log("five: ", num5);
        totAve = 0;
        other = 0;
        num0 = 0;
        num1 = 0;
        num2 = 0;
        num3 = 0;
        num4 = 0;
        num5 = 0;
        other = 0;
    }
}

function drawTile(c,x,y,texture) {
    totAve += c;
    other++;
    //fill(c/2,c*3,c*4);
    // switch(floor(c)) {
    //     case 0:
    //         //console.log("0: " ,c);
    //         num0++;
    //         break;
    //     case 1:
    //         //highlands
    //         num1++;
    //         break;
    //     case 2:
    //         //lowlands
    //         num2++;
    //         break;
    //     case 3: 
    //         //oceans
    //         num3++;
    //         break;
    //     case 4:
    //         num4++;
    //         break;
    //     case 5:
    //         num5++;
    //         break;
    //     default:
    //         other++;
    //         break;
    // }
    switch(floor(c*10)) {
        case 0:
            //tall hill 
            fill(c * 300, c * 500, c * 300);
            break;
        case 1:
            //dark grass
            fill(c*300, c*700, c*300);
            break; 
        case 2:
            //light grass
            fill(c * 400, c * 700, c * 400);
            break;
        case 3:
            //sand
            fill(c * 400, c * 500, c * 200);
            break;
        case 4:
            //water
            fill(0,0,255);
            break;
        default:
            fill(0,0,255);
            break;
    }


    // switch(floor(c)/(2.0*floor(texture))) {
    //     case 0:
    //         //tall hill 
    //         fill(0, 0, 0);
    //         break;
    //     case 0.25:
    //         fill(12.5, 12.5, 12.5);
    //         break;
    //     case 0.5:
    //         fill(25, 25, 25);
    //         break;
    //     case 0.75:
    //         fill(37.5, 37.5, 37.5);
    //         break;
    //     case 1:
    //         //medium hill 
    //         fill(50, 50, 50);
    //         break; 
    //     case 1.25:
    //         fill(62.5, 62.5, 62.5);
    //         break;
    //     case 1.5:
    //         fill(75, 75, 75);
    //         break;
    //     case 1.75:
    //         fill(87.5, 87.5, 87.5);
    //         break;        
    //     case 2:
    //         //min hill
    //         fill(100, 100, 100);
    //         break;
    //     case 2.25: 
    //         fill(75, 100, 75);
    //         break;
    //     case 2.5:
    //         fill(50,100,50);
    //         break;
    //     case 2.75:
    //         fill(25,100,25);
    //         break;
    //     case 3:
    //         //dark grass
    //         fill(0, 100, 0);
    //         break; 
    //     case 3.25:
    //         fill(20, 110, 17.5);
    //         break;  
    //     case 3.5:
    //         fill(40, 120, 35);
    //         break;
    //     case 3.75:
    //         fill(60, 120, 35);
    //         break;  
    //     case 4:
    //         //middle grass.
    //         fill(80, 140, 70);
    //         break;
    //     case 4.25:
    //         fill(72.5, 150, 65);
    //         break;
    //     case 4.5:
    //         fill(55, 160, 60);
    //         break; 
    //     case 4.75:
    //         fill(42.5, 170, 55);
    //         break;
    //     case 5:
    //         //light grass
    //         fill(30, 180, 50);
    //         break;
    //     case 5.25:
    //         fill(100, 192.5, 57.25);
    //         break;
    //     case 5.5:
    //         fill(170, 205, 65);
    //         break; 
    //     case 5.75:
    //         fill(210, 225.5, 72.5);
    //         break; 
    //     case 6:
    //         //sand
    //         fill(250, 230, 80);
    //         break;
    //     case 6.25:
    //         fill(60,130,180);
    //         break;
    //     case 6.5:
    //         fill(30, 100, 200);
    //         break; 
    //     case 6.75:
    //         fill(15,100,225);
    //         break;
    //     case 7:
    //         //shallow ocean
    //         fill(0, 100, 250);
    //         break;
    //     case 7.25:
    //         fill(0,97.5,230);
    //     case 7.5:
    //         fill(0, 85, 215);
    //         break; 
    //     case 7.75:
    //         fill(0,77.5,195)
    //         break;
    //     case 8:
    //         //middle ocean
    //         fill(0,70,180);
    //         break;
    //     case 8.25:
    //         fill(0,50,160);
    //         break;  
    //     case 8.5:
    //         fill(0,35,145);
    //         break;
    //     case 8.75:
    //         fill(0,20,137);
    //         break;
    //     case 9: 
    //         //deep ocean
    //         fill(0,10,130)
    //         break;
    //     default:
    //         fill(0,0,100);
    //         break;
    // }


  noStroke();
  //rectMode(CENTER);
  square(x,y,3);
}