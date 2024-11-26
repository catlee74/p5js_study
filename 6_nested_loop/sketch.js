function setup() {
  createCanvas(windowWidth, windowHeight);
  //새로 생긴 창의 길이를 자동으로 대입해준다
}

function draw() {
  noLoop();
  background(225);

  noFill();
  stroke(0);
  strokeWeight(4);
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      if (random(1) >= 0.5) {
        //50%의 확률이라는 뜻
        line(x, y, x + 40, y + 40);
      } else {
        line(x + 40, y, x, y + 40);
      }
    }
  }
}
