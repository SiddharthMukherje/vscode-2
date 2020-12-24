var fix
var move
var o1
var o2


function setup() {
  createCanvas(1200,400);
 fix=createSprite( 200,200,60,100)
 fix.shapeColor="green"

 move=createSprite(100,150,100,60 )
 move.shapeColor="green"

 o1=createSprite(500,250,50,50)
 o1.shapeColor="green"

 o2=createSprite(700,350,20,20)
 o2.shapeColor="green"

 fix.debug=true
 move.debug=true
 
}

function draw() {
  background(0);  
  move.x=World.mouseX
  move.y=World.mouseY

 
 if(isTouching(o1,move)){
   move.shapeColor="yellow"
   o1.shapeColor="yellow"

 }
 else{
  move.shapeColor="red"
  o1.shapeColor="red"
 }
  drawSprites();

}
