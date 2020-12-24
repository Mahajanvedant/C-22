const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
 myEngine=Engine.create();
myWorld=myEngine.world;
  
ball=Bodies.circle(200,200,50);
World.add(myWorld,ball);

ground=Bodies.rectangle(200,390,200,30);
World.add(myWorld,ground);
}

function draw() {
  background("lightgreen");  

Engine.update(myEngine);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,50,50);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}