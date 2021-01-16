const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobj;
var paperobj;
var dustbinobj;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	groundobj = new Ground(width/2, 670, width, 20);
	dustbinobj =  new Dustbin(1200,650);
	paperobj = new Paper(200, 450, 40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  	groundobj.display();
	paperobj.display();
	dustbinobj.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85}); 
}
}