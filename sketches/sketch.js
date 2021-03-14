/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  // Put setup code here
}

let time = 0;
function draw() {
  time += 0.01 + time * 0.01;
  background("#FFF");
  // Put drawings here
  push();

  translate(width / 2, height / 2);
  rotate(time);
  fill(0);
  ellipse(width / 3, 0, width / 6, width / 6);

  pop();
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
