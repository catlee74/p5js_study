let centerX = 400;
let centerY = 400;
let ratio = 1;

function setup() {
  createCanvas(800, 800);
}

function mousePressed() {
  centerX = mouseX;
  centerY = mouseY;
}

function draw() {
  background('#A09CB0');

  //고양이 그리기
  //그림을 그릴 때 상대적인 위치를 정해놓고 그리는 것이 편하다
  //예를 들어 코를 중심으로 그린다던지

  //입 흰부분
  noStroke();
  fill(255);
  ellipse(centerX, centerY + 60 * ratio, 200 * ratio, 160 * ratio);

  //코
  fill(0);
  noStroke();
  ellipse(centerX, centerY, 80 * ratio, 60 * ratio);

  //눈
  fill(255);
  stroke(0);
  strokeWeight(8);
  ellipse(centerX - 80 * ratio, centerY - 60 * ratio, 80 * ratio, 40 * ratio);
  ellipse(centerX + 80 * ratio, centerY - 60 * ratio, 80 * ratio, 40 * ratio);

  stroke(0);
  fill(0);
  ellipse(centerX - 80 * ratio, centerY - 60 * ratio, 10 * ratio, 40 * ratio);
  ellipse(centerX + 80 * ratio, centerY - 60 * ratio, 10 * ratio, 40 * ratio);
}
