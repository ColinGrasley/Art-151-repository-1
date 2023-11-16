let s = 0;
let abs;
let polySynth;

class humanType {
  constructor(redVal , greenVal , blueVal , xValue , yValue , height) {
    this.redVal = redVal;
    this.greenVal = greenVal;
    this.blueVal = blueVal;
    this.xValue = xValue;
    this.yValue = yValue;
    this.height = height;
  }
}

class humanBehavior {
  constructor(human) {

  }
}


function setup() {
  newhuman = new humanType(55,95,60,350,350,190);
  createCanvas(610, 590);
  noStroke();
  polySynth = new p5.PolySynth();
  abs = new BeatStep("Arturia BeatStep");

}
function draw() {
  setting();
  //listinfoHumanType(newhuman.redVal,newhuman.greenVal,newhuman.blueVal,newhuman.xValue,newhuman.yValue,newhuman.height);
  drawhuman(newhuman.redVal,newhuman.greenVal,newhuman.blueVal,newhuman.xValue,newhuman.yValue,newhuman.height);

}

function listinfoHumanType(r,g,b,x,y,h) {
  fill(0);
  textSize(36);
  text("red Value:",10,50);
  text(r,220,50);
  text("green Value:",10,90);
  text(g,220,90);
  text("blue Value:",10,130);
  text(b,220,130);
  text("x Value:",10,170);
  text(x,220,170);
  text("y Value:",10,210);
  text(y,220,210);
  text("height Value:",10,250);
  text(h,220,250);
}

function drawhuman(r,g,b,x,y,h) {
  fill(r,g,b);
  rectMode(CENTER);
  circle(x,y-h/4,h/6); //head
  rect(x,y,h/6,h/3); //body
  rect(x+h/8.5,y+h/50,h/18,h/3);//arm1
  rect(x-h/8.5,y+h/50,h/18,h/3);//arm2
  rect(x+h/18,y+h/2.7,h/18,h/2.5);//leg2
  rect(x-h/18,y+h/2.7,h/18,h/2.5);//leg1
}

function setting() {
  background(70,70,215);
  rectMode(CORNER);
  fill(155);

  rect(0,300,width,500);
  fill(130,50,30);
  rect(0,50,150,260);
  fill(90,80,60);
  rect(170,110,300,200);
  fill(70,50,40);
  rect(500,25,220,285);
}