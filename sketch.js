const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var armadillo;

function preload(){
  armadillo = loadAnimation('images/armadillo Idle.png')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0,255,255); 

//player
  armadillo.frameDelay = 2;
  player = createSprite(300, displayHeight-111);
  player.addAnimation("armadillo", armadillo);

//construction
  ground = new Ground(displayWidth/2,displayHeight-10,displayWidth,20);
  player1  = new Player(100,100);

//displayKeys
  ground.display();

  drawSprites();
}