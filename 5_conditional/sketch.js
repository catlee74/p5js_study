let interval = 8;
let num;

function setup() {
  createCanvas(800, 800);
  num = width / interval;
}

function draw() {
  background(0);

  for (i = 0; i < num; i++) {
    let startX, startY, endX, endY;
    let c;
    let weigth;
    startX = i * interval;
    endX = i * interval;
    if (i % 2 === 0) {
      c = color(255);
      weigth = 1;
      startY = height / 2 - i * 4;
      endY = height / 2 + i * 4;
    } else {
      c = color(120, 60, 4);
      weigth = 3;
      startY = i * 4;
      endY = height - i * 4;
    }
    noFill();
    stroke(c);
    strokeWeight(weigth);
    line(startX, startY, endX, endY);
  }
}
