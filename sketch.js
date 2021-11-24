var jake,jake_running;
var path,pathImg;
var boundary1,boundary2;

function preload(){
  //pre-load images
jake_running = loadAnimation("Runner-1.png","Runner-2.png");
  
 pathImg = loadImage("path2.png");
  }

function setup(){
  createCanvas(400,600);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.y = height /2;
  

jake = createSprite(200,200,10,10);
jake.addAnimation("JakeRunning",jake_running);
jake.scale=0.09



 boundary1 = createSprite(170,200,3,410);
 boundary1.visible=false;

boundary2 = createSprite(435,200,3,410);
boundary2.visible=false;
} 
function draw() {
  background(220);
  jake.x=World.mouseX;
  path.velocityY= 4;
  console.log(path.y);
  

  edges=createEdgeSprites();
  jake.collide(edges[3]);

if(path.y > 400){
  path.y = height /2
}



jake.collide(boundary2);
jake.collide(boundary1);

drawSprites();
}
