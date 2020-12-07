// NAMESPACING: NICKNAME

const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine;
var world;
var box1;
var box2;
var ground1;
function setup(){
createCanvas(400,400);
//create my engine from Matter.js engine
engine = Engine.create();
//creating my world from Mtter.js world
world = engine.world;
//bodies



//CREATING OBJECTS FROM CLASS
ground1= new Ground(200,390,400,20);
box1 = new Box(135,100,100,50);
box2 = new Box(100,150,100,100)
}

function draw(){
    background(0);
    //update everything
    Engine.update(engine);
    
    ground1.display();
    box1.display();
    box2.display();
    
    
   
}