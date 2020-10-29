function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 370, 50, 50);
  movingRect.shapeColor = "orange"
  fixedRect = createSprite (400,150,40,40);
  fixedRect.shapeColor = "pink"
  gameObject1=createSprite (590,200,50,80) ;
  gameObject1.shapeColor = "purple"
  gameObject2=createSprite (700,300,70,33) ; 
  gameObject2.shapeColor = "blue"
  gameObject3=createSprite (500,400,40,70); 
  gameObject3.shapeColor = "yellow"

}

function draw() {

  background(180); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if( isTouching(movingRect,gameObject3))
  {
    movingRect.shapeColor = "green" ;
    gameObject3.shapeColor = "green" ;
    
  }
else 
{
  movingRect.shapeColor = "red" ;
  gameObject3.shapeColor = "red" ;
}

     
   
  drawSprites();
}

