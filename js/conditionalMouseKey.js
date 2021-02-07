
////////////////////////矩形位置赋值
let  rectX = 900;
let  rectY = 500;

////////////////////////矩形颜色赋值
let fillR
let fillG
let fillB

function preload(){
  sixiwanzi = loadImage("images/sixiwanzi.jpg");
  xi = loadImage("images/xi.png");
  wanzi = loadImage("images/wanzi.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
////////////////////////矩形初色_山楂色
  fillR = (192);
  fillG = (50);
  fillB = (50);
  background(0, 0, 0);
}



function draw(){
////////////////////////屏幕点击分屏两色_黑色和肉色
   //if(mouseIsPressed){
     //background(251, 223, 218);
   //}else{
     //background(0, 0, 0);
   //}

////////////////////////鼠标画笔
    //line(pmouseX, pmouseY, mouseX, mouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);

////////////////////////鼠标点击画笔
  //line(pmouseX, pmouseY, mouseX, mouseY);
  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

////////////////////////屏幕移动变色 分屏两色 左红右蓝 左右移动 红蓝变色(&&后为鼠标移至特殊位置才奏效)
  if(mouseX > windowWidth/2 && mouseY < windowHeight/2){
    //background(180, 49, 100);
////////////////////////分屏两边加元素
    //fill(255, 0 , 0);
    //ellipse(300, 600, 300, 300);
////////////////////////上矩形位置和下矩形位置
    rectX = 100;
    rectY = 100;
  } else{
    //background(30, 100, 190);
    //fill(20, 0 , 255);
    //ellipse(700, 300, 200, 200);
    rectX = 30;
    rectY = 30;
  }
////////////////////////圆形刷新变色
    fill(fillR, fillG, fillB);
    rect(rectX, rectY, 420, 420);

////////////////////////接触到圆形边缘出现字体
    textSize(50);
    if(dist(mouseX, mouseY, rectX, rectY) > 50 ){
      text("FO(U)R FUN BALLS", 630, 80);
    }
    ////////////////////////空格键出图片或出线条
      strokeWeight(0);
      stroke(20, 120, 200);
      if(keyIsPressed == true){
        //line(0, 400, 800 , 600);
        image(sixiwanzi, 60, 60, 420, 420);
      }

      image(wanzi, 1000, 600, 74.08, 76.56);

      image(xi, mouseX, mouseY, 28.25, 27);
      print(mouseX);

}

////////////////////////矩形点击变色
function mouseReleased(){
  fillR = (250);
  fillG = (223);
  fillB = (219);

}



////////////////////////键盘字母键变色(a,b,c,d大小写键)
function keyPressed(){
  if(key == 'a' || key == 'A'){
    fillR = (192);
    fillG = (50);
    fillB = (50);
  }
  if(key == 'b' || key == 'B'){
    fillR = (71);
    fillG = (184);
    fillB = (132);
  }
  if(key == 'c' || key == 'C'){
    fillR = (237);
    fillG = (170);
    fillB = (67);
  }
  if(key == 'd' || key == 'D'){
    fillR = (239);
    fillG = (135);
    fillB = (153);
  }
////////////////////////键盘点击清空成背景(f大小写键)
  if(key == 'e' || key == 'E'){
    background(0, 0, 0);
  }
////////////////////////键盘点击保存(s大小写键)
  if(key == 's' || key == 'S'){
    save('drawing.png');
  }

}



////////////////////////随窗口移动改窗口尺寸
function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}
