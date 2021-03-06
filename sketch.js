const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
     bgIMG = loadImage("bgIMG.jfif");
}
function setup(){
    var canvas = createCanvas(1200,620);
    engine = Engine.create();
    world = engine.world;

    // create sprite here
    stone = new Stone(150,height-200);
    baseGround = new Ground(600,height,1200,20);
    groundLevel1 = new Ground(width/2,height/2+110,200,20)
    groundLevel2 = new Ground(width/2+400,height/2-10,200,20)
    slingshot = new SlingShot(stone.body,{x:150, y:height-200});
   
    // level 1 blocks       bottom line
    b1= new Block(width/2-80,height/2);
    b2= new Block(width/2-80+30,height/2 );
    b3= new Block(width/2-80+30+30,height/2 );
    b4= new Block(width/2-80+30+30+30,height/2 );
    b5= new Block(width/2-80+30+30+30+30,height/2 );
    b6= new Block(width/2-80+30+30+30+30+30,height/2 );
      // level 1 blocks       bottom line - 1
      b_3= new Block(width/2-110+30+30,height/2 );
      b_4= new Block(width/2-110+30+30+30,height/2 );
      b_5= new Block(width/2-110+30+30+30+30,height/2 );
      b_6= new Block(width/2-110+30+30+30+30+30,height/2 );
        // level 1 blocks       bottom line - 2
        b__5= new Block(width/2-140+30+30+30+30,height/2 );
        b__6= new Block(width/2-140+30+30+30+30+30,height/2 );
          // level 1 blocks       bottom line - 3
          b___6= new Block(width/2-170+15+30+30+30+30+30,height/2-50);



           // level 2 blocks       bottom line
    b1_2 = new Block(width/2+400-80,height/2-160);
    b2_2 = new Block(width/2+400-80+30,height/2-160 );
    b3_2 = new Block(width/2+400-80+30+30,height/2-160 );
    b4_2 = new Block(width/2+400-80+30+30+30,height/2-160 );
    b5_2 = new Block(width/2+400-80+30+30+30+30,height/2-160 );
    b6_2 = new Block(width/2+400-80+30+30+30+30+30,height/2-160 );
      // level 2 blocks       bottom line - 1
      b_3_2 = new Block(width/2+400-110+30+30,height/2-160 );
      b_4_2 = new Block(width/2+400-110+30+30+30,height/2-160 );
      b_5_2 = new Block(width/2+400-110+30+30+30+30,height/2-160 );
      b_6_2 = new Block(width/2+400-110+30+30+30+30+30,height/2-160 );
        // level 2 blocks       bottom line - 2
        b__5_2 = new Block(width/2+400-140+30+30+30+30,height/2-160 );
        b__6_2 = new Block(width/2+400-140+30+30+30+30+30,height/2-160 );
          // level 2 blocks       bottom line - 3
          b___6_2 = new Block(width/2+400-170+15+30+30+30+30+30,0);



 }

function draw(){
    background(bgIMG);
    Engine.update(engine);
    stone.display();
    baseGround.display();
    slingshot.display();
    groundLevel1.display();
    groundLevel2.display();
    //  // level 1 blocks       bottom line
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display(); 

     // level 1 blocks       bottom line-1
     b_3.display();
     b_4.display();
     b_5.display();
     b_6.display(); 

      // level 1 blocks       bottom line-2
      b__5.display();
      b__6.display(); 

       // level 1 blocks       bottom line-3
       b___6.display();
       
        //  // level 2 blocks       bottom line
    b1_2.display();
    b2_2.display();
    b3_2.display();
    b4_2.display();
    b5_2.display();
    b6_2.display(); 

     // level 1 blocks       bottom line-1
     b_3_2.display();
     b_4_2.display();
     b_5_2.display();
     b_6_2.display(); 

      // level 1 blocks       bottom line-2
      b__5_2.display();
      b__6_2.display(); 

       // level 1 blocks       bottom line-3
       b___6_2.display();
}

function mouseDragged(){
     Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
  //  gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
       // bird.trajectory = [];
        Matter.Body.setPosition(stone.body,{x: 150 ,y: height-200 })
     //   gameState = "onSling";
    }
}

