const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,600);
  

  square1 = new Square(40,550,40,40);

  obstacle1 = new Obstacle(100,100,1620,20);
  obstacle2 = new Obstacle(10,350,20,480)
  obstacle3 = new Obstacle(900,350,20,480)
  obstacle4 = new Obstacle(440,580,900,20)

  ball1 = new Ball(440,500,30)
}

function draw() {
  background(0);  
  Engine.update(engine);


  square1.display()
  obstacle1.display()
  obstacle2.display()
  obstacle3.display()
  obstacle4.display()
  ball1.display();
}