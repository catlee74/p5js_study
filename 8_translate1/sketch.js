let rad = 0;
let cols, rows;
let interval = 160;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = width / 160;
  rows = height / 160;
}

function draw() {
  background(220);

  noStroke();
  fill(255, 236, 0);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      //꽃의 중심점
      let centerX = x * interval;
      let centerY = y * interval;

      push();
      translate(centerX, centerY);
      //rotate보다 translate이 먼저 와야한다.
      rotate(rad);
      //p5js에서 회전은 모든 것이 화면 중심(0,0)을 기준으로 회전을 한다.
      //translate은 좌표 체계를 원하는 쪽으로 이동시킨다는 것이다.

      //꽃
      beginShape();
      vertex(-10, -60);
      vertex(-60, -110);
      vertex(-105, -35);
      vertex(-60, -5);
      vertex(-100, +30);
      vertex(-50, +105);
      vertex(+5, +45);
      vertex(+40, +95);
      vertex(+95, +30);
      vertex(+40, -10);
      vertex(+105, -60);
      vertex(+30, -105);
      vertex(-10, -60);
      endShape();
      pop();
    }
  }

  rad += PI / 180;
}
