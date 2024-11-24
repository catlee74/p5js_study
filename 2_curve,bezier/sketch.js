function setup() {
  createCanvas(600, 600);
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
  triangle(600, 0, 500, 100, 600, 200);

  //네 번째 도형(x라인)
  noFill();
  stroke(0);
  strokeWeight(1);
  line(600, 200, 400, 400);
  line(400, 200, 600, 400);

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

  //일곱 번째 도형(곡선)
  stroke(0);
  strokeWeight(12);
  noFill();
  curve(20, 420, 20, 420, 160, 440, 160, 480);
  curve(20, 420, 160, 440, 160, 480, 40, 500);
  curve(160, 440, 160, 480, 40, 500, 40, 540);
  curve(160, 480, 40, 500, 40, 540, 180, 560);
  curve(40, 500, 40, 540, 180, 560, 180, 560);
  noStroke();
  fill(0);
  circle(20, 420, 24);
  circle(180, 560, 24);

  //여덟 번째 도형(8자 곡선)
  stroke(240, 70, 100);
  strokeWeight(16);
  noFill();
  bezier(220, 500, 220, 400, 380, 600, 380, 500);
  bezier(220, 500, 220, 600, 380, 400, 380, 500);

  //아홉 번째 도형
  noStroke();
  fill(240, 70, 100, 120);
  triangle(600, 400, 600, 600, 400, 500);
  fill(5, 210, 160, 120);
  triangle(400, 400, 400, 600, 600, 500);
}
