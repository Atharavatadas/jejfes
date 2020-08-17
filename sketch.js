const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var re,re2,re3;
var ballsprites,ball1,ground;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	re = new rectan(590,610,10,100);
	re2 = new rectan(630,660,100,10);
	re3 = new rectan(680,610,10,100)
	ground = new Ground(400,670,800,10);	
	ball1 = new Paper(200,200,40);



	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
  ground.display()
  re.display()
  re2.display()
  re3.display()
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:195, y: -195})
}
}




