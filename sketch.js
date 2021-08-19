const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9,ob10;
var obstaclesImage;

var player;
var playerImage;

var door,lock,key;
var doorImage,lockImage,keyImage;

var HP,medikit,shield;
var HPImage, medikitImage,shieldImage;

var enemy1,enemy2,enemy3;
var enemy1Image, enemy2Image, enemy3Image;

var boss;
var BossImage;

var gun1,gun2,gun3,gun4,gun5;
var gun1Image, gun2Image, gun3Image, gun4Image,gun5Image;

function preload()
{

}


function setup() 
{
  createCanvas(windowWidth,windowHeight);
   
  engine = Engine.create();  
  world = engine.world;

  ground = new GROUND(100,800,windowWidth+1460,55);
}

function draw() 
{
  background(60,200,80);
  Engine.update(engine);


  ground.display();
}

