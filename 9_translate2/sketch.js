//원의 초기값
let x = 400,
  y = 200;

//변하는 값
let dx = 1,
  dy = 1;

let rad = 0;
let hue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
}

function draw() {
  // fill(255);
  // noStroke();
  // ellipse(x, y, 40);

  noFill();
  stroke(hue, 100, 100, 0.2);
  strokeWeight(0.5);
  translate(x, y);
  rotate(rad);
  line(-300, 0, 300, 0);

  rad += 0.01;
  if (hue > 360) hue = 0;
  hue++;
  x += dx;
  y += dy;

  if (x > width || x < 0) dx *= -1;
  //화면 오른쪽이나 왼쪽 끝에 도달했을 때 반대 방향으로 가도록
  //||는 or을 뜻함
  if (y > height || y < 0) dy *= -1;
}
