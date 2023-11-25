let abs;
let polySynth;

function preload() {
    soundFormats('mp3', 'ogg');
    sound1 = loadSound('assets/sounds/ani-big-pipe-hit-6814.mp3');
    soundFormats('mp3', 'ogg');
    sound2 = loadSound('assets/sounds/coaxial_comp-91272.mp3');
    soundFormats('mp3', 'ogg');
    sound3 = loadSound('assets/sounds/drum-beat-01-37136.mp3');
    soundFormats('mp3', 'ogg');
    sound4 = loadSound('assets/sounds/fat-knock-2-80255.mp3');
    soundFormats('mp3', 'ogg');
    sound5 = loadSound('assets/sounds/hat-12-36721.mp3');
    soundFormats('mp3', 'ogg');
    sound6 = loadSound('assets/sounds/lo-fi-clap-84889.mp3');
    soundFormats('mp3', 'ogg');
    sound7 = loadSound('assets/sounds/sensitone-steel-snare-99904.mp3');
    soundFormats('mp3', 'ogg');
    sound8 = loadSound('assets/sounds/wood-snare-sample-2-106097.mp3');
  }

function setup() {
    createCanvas(600, 600);
    background(0);
    polySynth = new p5.PolySynth();
    abs = new BeatStep("Arturia BeatStep");
    abs.pads[0] = -1;
    abs.pads[1] = -1;
    abs.pads[2] = -1;
    abs.pads[3] = -1;
    abs.pads[4] = -1;
    abs.pads[5] = -1;
    abs.pads[6] = -1;
    abs.pads[7] = -1;
  }

function draw() {
    playSound();
}

function playSound() {
    if(abs.pads[0] != -1) {
        sound1.play();
        abs.pads[0] = -1;
    }
    if(abs.pads[1] != -1) {
        sound2.play();
        abs.pads[1] = -1;
    }
    if(abs.pads[2] != -1) {
        sound3.play();
        abs.pads[2] = -1;
    }
    if(abs.pads[3] != -1) {
        sound4.play();
        abs.pads[3] = -1;
    }
    if(abs.pads[4] != -1) {
        sound5.play();
        abs.pads[4] = -1;
    }
    if(abs.pads[5] != -1) {
        sound6.play();
        abs.pads[5] = -1;
    }
    if(abs.pads[6] != -1) {
        sound7.play();
        abs.pads[6] = -1;
    }
    if(abs.pads[7] != -1) {
        sound8.play();
        abs.pads[7] = -1;
    }
}