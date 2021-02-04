let ellipseX = 300;
let ellipseY = 500;

let pointX = 100;
let pointY = 200;

let mac;
let mouse;
let loveGIF;

function preload(){
  mac = loadImage("images/mac.png");
  mouse = loadImage("images/mouse.png");
  loveGIF = createImg("images/love.gif");

}

function setup() {
  // put setup code here to run once静止代码

  // create canvas 500 by 500 px创建画布
  createCanvas(windowWidth, windowHeight);
  //刷新背景换色 rgb r两个数值控制变色速度
  //background(random(100, 150), random(255), random(255));
  //print(windowWidth);查看网页宽
  //change rectangle x,y coordinates to center of rect矩形中心
  rectMode(CENTER);
  imageMode(CENTER);

  ellipseX = random(ellipseX, windowWidth);
  ellipseY= random(ellipseY, windowHeight);

  noCursor();
  //print(ellipseX, ellipseY);
}

function draw() {
  background(random(100, 150), random(255), random(255));

  //image(mac, windowWidth/2, windowHeight/2);

  smooth();
  //styles for the ellipse圆形颜色和描边
  noStroke();
  // put drawing code here to run in a loop动态代码/画形状
  ellipse(ellipseX, ellipseY, 20, 20);

  //styles for the rect矩形颜色和描边
  stroke(100, 255, 80);
  strokeWeight(20);
  fill(50, 200, 120);
  rect(800, 400, 200, 300);

  //styles for the triangle三角形颜色和描边
  strokeWeight(20);
  fill(50, 30, 120);
  triangle(1200, 50, 1300, 600, 950, 400);

  stroke(random(100, 150), random(255), random(255));
  noFill();
  triangle(300, 400, 100, 400, mouseX, mouseY);

  //styles for the point鼠标轨迹实时跟踪
  fill(120);
  stroke(40, 280, 100);
  strokeWeight(20);
  //point is only x, y coordinates
  point(mouseX, mouseY);
  point(pointX, pointY);
  //print(mouseX);
  strokeWeight(20);
  line(30, 200, 800, 600);

  strokeWeight(10);
  line(pointX, pointY, 700, 500);

  loveGIF.position(300, 400);
  image(mac, windowWidth/2, windowHeight/2, 400, mouseY);

  image(mouse, mouseX, mouseY, 60, 50);
}
