var wall, bullet;
var speed,weight;


function setup() {
  createCanvas(800,400);
  bullet = createSprite(400,200,40,4);
  bullet.shapeColor="white";

  wall = createSprite(740,200,40,height/2);

  speed  = random(55,90);
  weight  = random(400,1500);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;

  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
        wall.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      wall.shapeColor="yellow";
  }
  if(deformation<100){
    wall.shapeColor="lime";
    
}

  }

  console.log(deformation);


  drawSprites();
} 