var docked = false

function preload(){
  bg = loadImage("spacebg.jpg")
  sc1 = loadImage("spacecraft1.png")
  sc1 = loadImage("spacecraft1.png")
  sc2 = loadImage("spacecraft2.png")
  sc3 = loadImage("spacecraft3.png")
  sc4 = loadImage("spacecraft4.png")
  iss = loadImage("iss.png")
}

function setup() {

  createCanvas(600,350);
  spaceCraft = createSprite(250, 300);
  spaceCraft.addImage(sc1)
  spaceCraft.scale = 0.2

  bigspaceCraft = createSprite(380, 200);
  bigspaceCraft.addImage(iss)
  bigspaceCraft.scale = 0.5


}

function draw() {
  background(bg);
  if(!docked){
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(sc4)
      spaceCraft.x = spaceCraft.x+2
     }
   
     if(keyDown(LEFT_ARROW)){
       spaceCraft.addImage(sc3)
       spaceCraft.x = spaceCraft.x-2
      }
   
     if(keyDown(DOWN_ARROW)){
       spaceCraft.addImage(sc2)
       spaceCraft.velocityX = 0
      }
   
      if(keyDown(UP_ARROW)){
       spaceCraft.y = spaceCraft.y-2
      }
  } 

   if(spaceCraft.y<bigspaceCraft.y+100 && spaceCraft.x<bigspaceCraft.x){
     textSize(25)
     fill("white")
     text("Misson donee",200,200)
     docked = true
   }

  drawSprites();
}