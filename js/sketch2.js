let r = 10
let a = 0
let c = 0
let angle = 0
let art;
let mac;
//////////////////////////////////////////重点!!设置跳动位置/名字/随机
let squareNums = [25, 36, 49, 64, 82, 100, 121, 144];
let names = ['ALWAYS FOR FUN!', 'FO(U)R FUN BALLS']
let randomName;

function preload(){
  mac = loadImage("images/mac.png");
}

function setup() {
  // put setup code here to run once
  //creating canvas 500x500 px

  createCanvas(windowWidth, windowHeight, WEBGL)
  art = createGraphics(400, 400)
  //background(0);

}

function draw() {
  // put drawing code here to run in a loop
  //background(0);

  image(mac, -659, -350, windowWidth, windowHeight);

  smooth()
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  fill (random(255), random(255), random(255), random(255))

  push()
  //translate(200, 200)
  let x = r + c * cos(a)

  let y = r + c * sin(a)
  art.strokeWeight(0)
  art.fill(0, 0, 0)
  art.ellipse(x + 200, y + 200, 10, 10)

  c += 0.2
  a += 0.8
  pop()

  push()
  texture(art)
  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)
  sphere(mouseX, 150, 150, 150)

  angle += 0.1
  pop()

  //////////////////////////////////////////跳动矩形
  for(i=0; i < squareNums.length; i++){
    fill(0, 0, 0);
    //print(squareNums[i]);
    ellipse(random(windowWidth), random(windowHeight), 13, 13);
  }

}
