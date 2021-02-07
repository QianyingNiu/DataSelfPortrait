let wanzi;

let xiX = [];
let xiY = [];

//////////////////////////////////////////重点!!设置跳动位置/名字/随机
let squareNums = [25, 36, 49, 64, 82, 100, 121, 144];
let names = ['ALWAYS FOR FUN!', 'FO(U)R FUN BALLS']
let randomName;

function preload(){
  xi = loadImage('images/xi.png');
  wanzi = loadImage('images/wanzi.png');
  shanzha = loadImage('images/shanzha.png');
  nuomi = loadImage('images/nuomi.png');
  saniao = loadImage('images/saniao.png');
  huazhi = loadImage('images/huazhi.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

//////////////////////////////////////////跳动频率
  frameRate(1);
}

//////////////////////////////////////////点击出图
function draw(){
  background(251, 223, 219);

  for(let i=0; i < xiX.length; i++){
    image(xi, xiX[i], xiY[i], 50, 50);
  }

  print(xiX.length, xiY.length);


  //////////////////////////////////////////跳动图片
  for(let i=0; i < 1; i++){
    fill(random(255), random(255), random(255));
    //ellipse(posX, posY, 70 , 70);
    image(shanzha,random(windowWidth), random(windowHeight), 210, 210);
  }

  for(let i=0; i < 1; i++){
    fill(random(255), random(255), random(255));
    //ellipse(posX, posY, 70 , 70);
    image(nuomi,random(windowWidth), random(windowHeight), 210, 210);
  }

  for(let i=0; i < 1; i++){
    fill(random(255), random(255), random(255));
    //ellipse(posX, posY, 70 , 70);
    image(saniao,random(windowWidth), random(windowHeight), 210, 210);
  }

  for(let i=0; i < 1; i++){
    fill(random(255), random(255), random(255));
    //ellipse(posX, posY, 70 , 70);
    image(huazhi,random(windowWidth), random(windowHeight), 210, 210);
  }


  //////////////////////////////////////////随机名字

  randomName = int(random(names.length));

  //////////////////////////////////////////网格线框
  stroke(192, 50, 59);
  for(let i=0; i < windowHeight; i++){
    line(0, i*120, windowWidth, i*120);
  }
  for(let i=0; i < windowHeight; i++){
    line(i*120, 0, i*120, windowHeight);
  }
  fill(192, 50, 59);
  textSize(40);
  text(names[randomName], 60, 60);

  //////////////////////////////////////////跳动矩形
  for(i=0; i < squareNums.length; i++){
    fill(random(255), random(255), random(255));
    //print(squareNums[i]);
    ellipse(random(windowWidth), random(windowHeight), 13, 13);
  }

}

//////////////////////////////////////////点击出图
function mousePressed(){

  xiX.push(mouseX);
  xiY.push(mouseY);

}

//////////////////////////////////////////点击清图
function keyPressed(){
  if( key == 'x' && xiX.length>0 ){
    xiX.splice(0,xiX.length);//delete all element at index 0
    xiY.splice(0,xiY.length);
    //xiX.splice(0,1);//delete one element at index 0
    //xiY.splice(0,1);
  }
}
