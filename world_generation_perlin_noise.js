
//command console
//-------------------------//

let filledAmount = 1;
//-------------------------//

//filledAmount(10,20)higher mumber means more of the map is water.//

//=========================//
let change = true;
let iterator = 0;
let slider;
let slider2;
let manual = false;
let zoom ;
let abs;
let polySynth;
let pause = true;
//=========================//


// let items = new Object()

// class human {
//     constructor(age, speed, hunger) {
//         this.age = age;
//         this.speed = speed;
//         this.hunger = hunger;
//     }
//     eat(x) {
        
//     }
// }  

function setup() {
    createCanvas(600, 600);
    polySynth = new p5.PolySynth();
    abs = new BeatStep("Arturia BeatStep");
  }
  
function draw() {
    let zoom = map(abs.dials[0], 0, 127, 0.005, 0.02) ;
    let filledAmount = map(abs.dials[1], 0, 127, 0.1, 15);
    coolmap(zoom,filledAmount,iterator);
    if(abs.pad[0] && pause) {

        pause = false;
    }
    else if(abs.pad[0]) {
        fill("red");
        circle(200,200,50);
        pause = true;
    }

    if(!pause) {
        iterator++;
    }
}

function coolmap(noiseScale,noiseLevel,iterator) {
    for(let y = 0; y < height; y += 3) {
        for(let x = 0; x < width; x += 3) {
            let nx = noiseScale * x;
            let ny = noiseScale * y;
            let nt = noiseScale * iterator;
            let c = (noiseLevel+11) * noise(nx,ny,nt);
            
            switch(floor(c)) {
                case 0:
                    //tall hill 
                    fill(0, 0, 0);
                    break; 
                case 1:
                    //medium hill 
                    fill(50, 50, 50);
                    break; 
                case 2:
                    //hill
                    fill(100, 100, 100);
                    break;
                case 3:
                    //dark grass
                    fill(0, 100, 0);
                    break;  
                case 4:
                    //middle grass.
                    fill(80, 140, 70);
                    break;
                case 5:
                    //light grass
                    fill(30, 180, 50);
                    break;
                case 6:
                    //sand
                    fill(250, 230, 80);
                    break;
                case 7:
                    //shallow ocean
                    fill(0, 100, 250);
                    break;
                case 8:
                    //middle ocean
                    fill(0,70,180);
                    break;
                default:
                    fill(0,0,130);
                    break;
            }
          noStroke();
          //rectMode(CENTER);
          square(x,y,3);
        }
    }

}

