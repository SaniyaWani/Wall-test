var bullet, wall;
var speed, weight;
var deformation, thickness;

function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90);
  weight=random(30,52);
  thickness=random(223,321);

  bullet= createSprite(50, 200, 20, 50);
  bullet.shapeColor="white";
 
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  
  
}

function draw() {
  background("black");  
  bullet.velocityX=speed;

 if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*width*speed*speed/(thickness*thickness*thickness);
  console.log(damage);
 } 

 if(damage>10){
   wall.shapeColor="red";

 }
 
 if(damage<10){
   wall.shapeColor="green";
 }
  drawSprites();
}





