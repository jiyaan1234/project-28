
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;

function preload()
{
	boy = loadImage("boy image.jpg") ;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  boy = createSprite(400,650,10,10) ;

 ground1 = new Ground (400,650,800,10);
 stone1 = new stone(235,450,10,10);
 tree1 = new tree(635,450,100,10);
 obj1 = new mango(635,480,10,10);
 obj2 = new mango(650,420,10,10);
 obj3 = new mango(625,410,10,10);
 obj4 = new mango(670,460,10,10);
 obj5 = new mango(635,440,10,10);
 slingshot = new SlingShot(stone.body,{x:240, y:500});


	
  
}


function draw() {
  rectMode(CENTER);
  background(0); 

  detectollision(stone,obj1);
  detectollision(stone,obj2);
  detectollision(stone,obj3);
  detectollision(stone,obj4);
  detectollision(stone,obj5);
  


  
 
  ground1.display();
  stone1.display();
  tree1.display();
  obj1.display();
  obj2.display();
  obj3.display();
  obj4.display();
  obj5.display();

 

  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed (){
  if(keyCode===32){
  slingshot.attach(bird.body)
  }

}



