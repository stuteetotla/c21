var m;
var f;
var a;
var x;
var z;
function setup() {

  createCanvas(1200,800);
m=createSprite(400,200,80,30);
m.shapeColor= "blue";
f=createSprite(200,200,50,80);
f.shapeColor= "yellow";
a=createSprite(300,200,80,30);
a.shapeColor= "white";
x=createSprite(400,200,80,30);
x.shapeColor= "green";
z=createSprite(500,200,80,30);
z.shapeColor= "orange";


}

function draw() {
  background("black");  
  m.x=World.mouseX;
  m.y=World.mouseY;
  
 clean(a,m);
 clean(x,m);
 clean(z,m);
 clean(f,m);
  drawSprites();
}

function clean (b,c) {
  if(c.x-b.x<c.width/2+b.width/2
    && b.x-c.x<c.width/2+b.width/2
    && c.y-b.y<c.height/2+b.height/2
    && b.y-c.y<c.height/2+b.height/2
    ) {
      c.shapeColor="red";
      b.shapeColor="red";
    }
    else{
      c.shapeColor= "blue"; 
      b.shapeColor= "pink";
    }

}
