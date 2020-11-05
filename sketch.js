const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,box3;


function setup() {
 var canvas= createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(200,10,50,50);
  box2 = new Box(100,10,50,50)
  box3 = new Box(300,10,50,50)
  ground = new Ground(100,380,800,20);
  
}

function draw() {
  background(25,255,255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  
}