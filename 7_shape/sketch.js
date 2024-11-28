const pitch = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 10);
  //이렇게 배경에 알파값을 주면 매 프레임마다 불투명도 10의 배경이 깔린다
  let num = floor(random(4, 12));
  let interval = width / num;
  let weight = random(1, 8);

  noFill();
  stroke(0);
  strokeWeight(weight);

  beginShape();
  curveVertex(0, height / 2 + random(-pitch, pitch)); //첫컨트롤 포인트
  for (let i = 0; i <= num; i++) {
    curveVertex(interval * i, height / 2 + random(-pitch, pitch));
  }
  curveVertex(interval * num, height / 2 + random(-pitch, pitch)); //마지막 컨트롤 포인트
  endShape();
}
