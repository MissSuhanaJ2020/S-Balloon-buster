var background0, backgroundImage;
var bow, bowImage;
var ballonRed, ballonImageRed
var ballonGreen, ballonImageGreen;
var ballonBlue, ballonImageRed;
var ballonPink, ballonImagePink;
var arrow, arrowImage;
var score=0;
var whoosh;
function preload() {

  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  ballonImageRed = loadImage("red_balloon0.png");
  ballonImageGreen = loadImage("green_balloon0.png");
  ballonImageBlue = loadImage("blue_balloon0.png");
  ballonImagePink = loadImage("pink_balloon0.png");
  arrowImage = loadImage("arrow0.png");

}

function setup() {
whoosh=loadSound("whoosh.mp3")
  createCanvas(400, 400);


  background0 = createSprite(0, 0, 400, 400);
  background0.addImage(" background0", backgroundImage);
  background0.x = background0.width / 2;
  background0.scale = 2;


  bow = createSprite(380, 200, 50, 50);
  bow.addImage("bow", bowImage);

/*
  for (var i = 60; i < 380; i = i + 60) {
    ballonRed = createSprite(20, i, 1, 1);
    ballonRed.addImage("ballonRed", ballonImageRed);
    ballonRed.scale = 0.1;
  }

  for (i = 110; i < 360; i = i + 60) {
    ballonGreen = createSprite(60, i, 1, 1);
    ballonGreen.addImage("ballonGreen", ballonImageGreen);
    ballonGreen.scale = 0.1;
  }

  for (i = 130; i < 350; i = i + 60) {
    ballonBlue = createSprite(100, i, 1, 1);
    ballonBlue.addImage("ballonBlue", ballonImageBlue);
    ballonBlue.scale = 0.1;
  }
  for (i = 150; i < 280; i = i + 60) {
    ballonpink = createSprite(140, i, 1, 1);
    ballonpink.addImage("ballonPink", ballonImagePink);
    ballonpink.scale = 1;
  }
  */
}

function draw() {

  background("white");

  background0.velocityX = -5;
  if (background0.x < 0) {
    background0.x = background0.width / 2;
  }

  bow.y = mouseY;

  if (keyWentDown("space")) {
    arrow1();
    arrow.y = bow.y;
whoosh.play();
  }

  var select_balloon = Math.round(random(1, 4));
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redballoon();
    } else if (select_balloon == 2) {
      greenballoon();
    } else if (select_balloon == 3) {
      blueballoon();
    } else {
      pinkballoon();
    }
  }
  drawSprites();
  fill("red");
  textSize(20);
  score=score+1;
   text("Score:" +score,290,30);
  
}

function arrow1() {
  arrow = createSprite(400, 200, 10, 20);
  arrow.scale = 0.3;
  arrow.velocityX = -4;
  arrow.addImage("arrow", arrowImage);
  arrow.lifetime=130;
}

function redballoon() {
   var randomnum= Math.round(random(20, 370));
  var red = createSprite(0, randomnum, 10, 10);
  red.addImage(ballonImageRed);
  red.velocityX = 3;
  red.lifetime = 150;
red.scale=0.1;
}

function blueballoon() {
   var randomnum= Math.round(random(20, 370));
  var blue = createSprite(0, randomnum, 10, 10);
  blue.addImage(ballonImageBlue);
  blue.velocityX = 3;
  blue.lifetime = 150;
blue.scale=0.1;
}

function greenballoon() {
   var randomnum= Math.round(random(20, 370));
  var green = createSprite(0, randomnum, 10, 10);
  green.addImage(ballonImageGreen);
  green.velocityX = 3;
  green.lifetime = 150;
green.scale=0.1;
}

function pinkballoon() {
   var randomnum= Math.round(random(20, 370));
  var pink = createSprite(0, randomnum, 10, 10);
  pink.addImage(ballonImagePink);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale=1.25   ;
}
