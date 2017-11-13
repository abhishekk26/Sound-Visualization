var song;
var fft;
var button;
var w;

function toggleSong() 
{
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('hbd.mp3');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 64);
    w=width/64;
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  //console.log(spectrum);
  noStroke(255);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    fill(i, 255, 255);
    var y = map(amp,0,256,height,0);
    //line(i*w, height, i*w, y);
    rect(i * w, y, w-2, height - y);
  }


}