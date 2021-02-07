let ballX;
let ballY;

let ballXspeed = 2;
let ballYspeed = 2;

let ballDiameter = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);

  ballX = random(15, windowWidth - 15);
  ballY = random(15, windowHeight - 15);
  background(0);

}

function draw(){

  stroke(200, 40, 100);
  ellipse(ballX, ballY, 30 , 30);

  ballX = ballX + ballXspeed;
  ballY = ballY + ballYspeed;

  if(ballX >= windowWidth - 15 || ballX <= 15){
    ballXspeed = ballXspeed * -1;
  }

  if(ballX >= windowHeight -15 || ballY <= 15){
    ballYspeed = ballYspeed * -1;
  }

  print(ballX);

}
