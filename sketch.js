
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render 
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	Wall = new wall(400,350,20,230);
	//World.add(world, Wall);

	ball1 = new Ball (230,550);
	ball2 = new Ball (280,550);
	ball3 = new Ball (330,550);
	ball4 = new Ball (380,550);
	ball5 = new Ball (430,550);

rope1 = new Rope (ball1.body,Wall.body,-110,5);
//	World.add(world,rope1);

	rope2 = new Rope (ball2.body,Wall.body,-55,5);
//	World.add(world,rope2);

	rope3 = new Rope (ball3.body,Wall.body,-0,5);
//	World.add(world,rope3);

	rope4 = new Rope (ball4.body,Wall.body,55,5);
//	World.add(world,rope4);

	rope5 = new Rope (ball5.body,Wall.body,110,5);
	//World.add(world,rope5);



  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  Wall.display();
 rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  keUp();
  //drawSprites();
  Engine.update(engine);
}

function keUp(){	
	if (keyDown("r"))	{
		text("hi",200,200);
		
	Body.applyForce(ball1.body,ball1.body.position, {x:-1, y:0.0});
	//ball1.body.position.x = mouseX;
   //ball1.body.position.y = mouseY;
   console.log( ball1.body.position);
	}
	}

