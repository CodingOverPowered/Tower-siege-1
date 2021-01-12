
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bBox,bBox1,bBox2,bBox3,bBox4;
var bBox5,bBox6,bBox7,bBox8,bBox9;

var pBox1,pBox2,pBox3;
var pBox4,pBox5,pBox6;

var gBox1,gBox2,gBox3,gBox4,gBox5,gBox6,gBox7
var gBox8,gBox9,gBox10,gBox11,gBox12,gBox13,gBox14

var rBox,rBox1;

var ground

var polygon 
var slingshot

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

  
	engine = Engine.create();
  world = engine.world;
  
  

  //Create the Bodies Here.
  

    bBox=new Bbox(560+30,520)
    bBox1=new Bbox(510+30,520)
    bBox2=new Bbox(610+30,520)
    bBox3=new Bbox(460+30,520)
    bBox4=new Bbox(660+30,520)

    bBox5=new Bbox(900,270)
    bBox6=new Bbox(850,270)
    bBox7=new Bbox(950,270)
    bBox8=new Bbox(800,270)
    bBox9=new Bbox(1000,270)

    pBox1=new Pbox(560+30,470)
    pBox2=new Pbox(510+30,470)
    pBox3=new Pbox(610+30,470)

    pBox4=new Pbox(900,220)
    pBox5=new Pbox(850,220)
    pBox6=new Pbox(950,220)

  polygon=new Polygon(50,200,25)

    gBox1=new Gbox(560+30,570)
    gBox2=new Gbox(510+30,570)
    gBox3=new Gbox(610+30,570)
    gBox4=new Gbox(460+30,570)
    gBox5=new Gbox(660+30,570)
    gBox6=new Gbox(410+30,570)
    gBox7=new Gbox(710+30,570)

    ground2=new Ground(900,350,400,10)
    gBox8=new Gbox(900,320)
    gBox9=new Gbox(950,320)
    gBox10=new Gbox(850,320)
    gBox11=new Gbox(800,320)
    gBox12=new Gbox(750,320)
    gBox13=new Gbox(1000,320)
    gBox14=new Gbox(1050,320)

    rBox=new Rbox(560+30,420)
    rBox1=new Rbox(850+50,170)

    ground1=new Ground(560+30,600,400,10)

    slingshot=new SlingShot(polygon.body,{x:100,y:500})

    

 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");

  bBox.display()
  bBox1.display()
  bBox2.display()
  bBox3.display()
  bBox4.display()
  bBox5.display()
  bBox6.display()
  bBox7.display()
  bBox8.display()
  bBox9.display()

  pBox1.display()
  pBox2.display()
  pBox3.display()
  pBox4.display()
  pBox5.display()
  pBox6.display()

  gBox1.display()
  gBox2.display()
  gBox3.display()
  gBox4.display()
  gBox5.display()
  gBox6.display()
  gBox7.display()
  gBox8.display()
  gBox9.display()
  gBox10.display()
  gBox11.display()
  gBox12.display()
  gBox13.display()
  gBox14.display()

 polygon.display()
 slingshot.display()

  rBox.display()
  rBox1.display()

  ground1.display()
  ground2.display()

 
  
  drawSprites();
 
}

function mouseDragged (){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
  slingshot.fly()
  }


