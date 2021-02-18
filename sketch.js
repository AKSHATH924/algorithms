var fixedRect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,300,200,60);
  fixedRect.shapeColor = "green";
  movingrect = createSprite(100,100,40,40);
  movingrect.shapeColor = "green";
  
}

function draw() {
  background(255,255,255);  
  console.log(fixedRect.x-movingrect.x);
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(fixedRect.x - movingrect.x < movingrect.width/2+fixedRect.width/2 &&
    movingrect.x-fixedRect.x < movingrect.width/2+fixedRect.width/2 &&
    movingrect.y-fixedRect.y < movingrect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingrect.y < movingrect.height/2+fixedRect.height/2 ){
    movingrect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  drawSprites();
}