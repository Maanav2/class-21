var fixedRect, movingRect;
var ob1,ob2; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1=createSprite(600,500,50,50);
  ob2=createSprite(1000,500,50,50);
  ob1.shapeColor="green";
  ob2.shapeColor="green";
  ob1.debug="true";
  ob2.debug="true";

  ob1.velocityX=6;
  ob2.velocityX=-6;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(ob1,ob2);
  
  drawSprites();
}

