function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  //첫 번째 도형(빨간 타원)
  fill(240, 70, 100);
  noStroke();
  ellipse(100, 100, 200);

  //두 번째 도형(회색 타원)
  noFill();
  stroke(120);
  strokeWeight(20);
  ellipse(300, 100, 80);

  //세 번째 도형(삼각형)
  noStroke();
  fill(255, 200, 100);
  triangle(400, 0, 500, 100, 400, 200);
  //삼각형은 첫 번째 포인트의 x,y좌표, 두 번째 포인트의 x,y좌표,
  //세 번째 포인트의 x,y좌표로 이루어져 있다.
  triangle(600, 0, 500, 100, 600, 200);

  //네 번째 도형(x라인)
  noFill();
  stroke(0);
  strokeWeight(1);
  line(600, 200, 400, 400);
  line(400, 200, 600, 400);

  // line(600, 0, 800, 200);
  // line(800, 0, 600, 200);

  //다섯 번째 도형(사각형)
  fill(240, 70, 100);
  noStroke();
  rect(200, 200, 200);
  fill(255);
  rect(250, 250, 100);

  //여섯 번째 도형(반원)
  fill(5, 210, 160);
  noStroke();
  arc(100, 200, 200, 200, 0, PI);
  arc(100, 400, 200, 200, PI, PI * 2);
}
