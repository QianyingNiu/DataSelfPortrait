
////////////////////////圆形位置赋值
let  ellipseX = 900;
let  ellipseY = 500;

////////////////////////圆形刷新变色
let fillR
let fillG
let fillB




function setup(){
  createCanvas(windowWidth, windowHeight);
////////////////////////圆形刷新变色
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);
  background(40, 100, 30);
}




function draw(){
////////////////////////屏幕点击变色 分屏两色
  // if(mouseIsPressed){
  //   background(180, 49, 100);
  // }else{
  //   background(40, 100, 30);
  // }

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
////////////////////////圆形移动变色
    ellipseX = 300;
    ellipseY = 300;
  } else{
    //background(30, 100, 190);
    //fill(20, 0 , 255);
    //ellipse(700, 300, 200, 200);
    ellipseX = 900;
    ellipseY = 500;
  }
////////////////////////圆形刷新变色
    fill(fillR, fillG, fillB);
    ellipse(ellipseX, ellipseY, 100, 100);

////////////////////////接触到圆形边缘出现字体
    textSize(50);
    if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50 ){
      text("Got the ellipse!!!", 200, 300);
    }
    ////////////////////////键盘点击变色(空格键)
      strokeWeight(20);
      stroke(20, 120, 200);
      if(keyIsPressed == true){
        line(0, 400, 800 , 600);

      }
}




////////////////////////圆形点击变色
function mouseReleased(){
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);

}





////////////////////////键盘点击变色(c大小写键)
function keyPressed(){
  if(key == 'c' || key == 'C'){
    fillR = random(255);
    fillG = random(255);
    fillB = random(255);
  }
////////////////////////键盘点击清空成背景(f大小写键)
  if(key == 'f' || key == 'F'){
    background(40, 100, 30);
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
