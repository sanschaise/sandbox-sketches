/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  // Put setup code here
}

function draw() {
  // Put drawings here
  w = 15;
  h = 15;

  for (var i = 0; i < width / w; i++) {
    for (var j = 0; j < height / h; j++) {
      if (sin(frameCount / 50 + i * j) > 0.5) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * w, j * h, w, h);
    }
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
