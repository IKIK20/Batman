const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var thunderCreatedFrame=0

var engine, world;
drops=[]

function preload(){
  thunder1=loadImage("images/thunderbolt/1.png")  
  thunder2=loadImage("images/thunderbolt/2.png")  
  thunder3=loadImage("images/thunderbolt/3.png")  
  thunder4=loadImage("images/thunderbolt/4.png")  
}

function setup(){
  createCanvas(500,700);
  engine= Engine.create()
  world=engine.world

  umb= new Umbrella(200,500);
 
}

function draw(){
  background("lightblue"); 
  Engine.update(engine) 

  rand=Math.round(random(1,4))

  if(frameCount%80===0){
    thunderCreatedFrame=frameCount
  }

  for(var j=0; j < drops.length;j++){
    drops[j].display()
  }

  if(frameCount%60===0){
    drops.push(new Drops(random(50,450),10,10))
  }

  umb.display()

}   

