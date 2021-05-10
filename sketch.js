const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,4000,150);
  rope = new Rope(hero.body, { x: 200, y: 50 });
  monster = new Monster(1100,50,300);

  box1 = new Box(280,450,50,80);  
  box2 = new Box(310,450,50,80);
  box3 = new Box(340,450,50,80);
  box4 = new Box(370,450,50,80);
  box5 = new Box(400,450,50,80);
  box6 = new Box(430,450,50,80);
  box7 = new Box(460,450,50,80);
  box8 = new Box(490,450,50,80);
  box9 = new Box(310,415,50,80);
  box10 = new Box(340,415,50,80);
  box11 = new Box(370,115,50,80);
  box12 = new Box(400,415,50,80);
  box13 = new Box(430,415,50,80);
  box14 = new Box(460,415,50,80);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();


  hero.display();
 // rope.display();
  monster.display();

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX , y: mouseY} )
  }
  function mouseReleased(){
    rope.fly();
}