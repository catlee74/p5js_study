function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  noFill();
  stroke(250, 120, 10);
  // ellipse(400, 400, 100);
  //+20이 0번 더해졌다.
  // ellipse(400, 400, 100 + 20);
  //+20이 1번 더해졌다.
  // ellipse(400, 400, 100 + 20+ 20);
  //+20이 2번 더해졌다.
  // ellipse(400, 400, 100 + 20+ 20+ 20);
  //+20이 3번 더해졌다.
  for (i = 0; i < 100; i++) {
    strokeWeight(i * 0.2);
    //점점 굵어지는 선을 만들 수 있다.
    ellipse(400, 400, 100 + 20 * i);
  }
}
