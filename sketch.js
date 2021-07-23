const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var holder,ball,ground;
//var stand1,stand2;
//var ball;
//var slingShot;
//var polygon_img;
var box1,box2,box3,box4,box5,ground,ball;
function preload(){
  polygon_img=loadImage("libraries/polygon.png");
}
function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(600,600,1200,20);
 // stand1 = new Stand(390,300,250,10);
  //stand2 = new Stand(700,200,200,10);
 
  //level one
  //block1 = new Block(300,275,30,40);
  //console.log(block1);
  //block2 = new Block(330,275,30,40);
 // block3 = new Block(360,275,30,40);
 // block4 = new Block(390,275,30,40);
  //block5 = new Block(420,275,30,40);
 // block6 = new Block(450,275,30,40);
  //block7 = new Block(480,275,30,40);
  //level two
  //block8 = new Block(330,235,30,40);
  //block9 = new Block(360,235,30,40);
  //block10 = new Block(390,235,30,40);
 // block11 = new Block(420,235,30,40);
 // block12 = new Block(450,235,30,40);
  //level three
  //block13 = new Block(360,195,30,40);
 // block14 = new Block(390,195,30,40);
 // block15 = new Block(420,195,30,40);
  //top
  //block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
 // blocks1 = new Block(640,175,30,40);
 // blocks2 = new Block(670,175,30,40);
  //blocks3 = new Block(700,175,30,40);
  //blocks4 = new Block(730,175,30,40);
  //blocks5 = new Block(760,175,30,40);
  //level two
  //blocks6 = new Block(670,135,30,40);
 // blocks7 = new Block(700,135,30,40);
 // blocks8 = new Block(730,135,30,40);
  //top
  //blocks9 = new Block(700,95,30,40);
  box1 = new Box(900,100,70,70);
  box2 = new Box(800,100,70,70);
  box3 = new Box(700,100,70,70);
  box4 = new Box(600,100,70,70);
  box5 = new Box(500,100,70,70);
  ball = new Ball(200,200,50,50);
  rope = new Rope(ball.body,{x:500,y:50});

  //ball holder with slings
 // ball = Bodies.circle(50,200,20);
 // World.add(world,ball);

  //slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background("yellow"); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  //textSize(20);
 // fill("lightyellow");
 // text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  //stand1.display();
  //stand2.display();
  //strokeWeight(2);
  //stroke(15);
 // fill("skyblue");
  //block1.display();
 // {block2.display();
  //block3.display();
 // block4.display();
 // block5.display();
 // block6.display();
 // block7.display();
 // fill("pink");
//  block8.display();
  //block9.display();
//  block10.display();
 // block11.display();
 // block12.display();
 // fill("turquoise");
 // block13.display();
  //block14.display();
  //block15.display();
 // fill("grey");
 // block16.display();
  //fill("skyblue");
  //blocks1.display();
  //blocks2.display();
 // blocks3.display();
 // blocks4.display();
 // blocks5.display();
 // fill("turquoise");
// blocks6.display();
 // blocks7.display();
 // blocks8.display();
 // fill("pink")
 // blocks9.display();
  //ill("gold");
  //imageMode(CENTER)
  //image(polygon_img ,ball.position.x,ball.position.y,40,40);

  //slingShot.display();}
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}
