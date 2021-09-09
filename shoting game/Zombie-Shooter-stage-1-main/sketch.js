var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg
var heart1,heart2,heart3
var heart1Img,heart2Img,heart3Img
var zombieGroup
var score=0
var life=3
var bullets=70
var lose,win,explosion
var gameState="figth"
var bullet,bulletImg

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  heart1Img=loadImage("assets/heart_1.png")
  heart2Img=loadImage("assets/heart_2.png")
  heart3Img=loadImage("assets/heart_3.png")
  zombieImg=loadImage("assets/zombie.png")
  lose=loadSound("assets/lose.mp3")
  win=loadSound("assets/win.mp3")
  explosion=loadSound("assets/explosion.mp3")
  bulletImg=loadImage("assets/bullet.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   heart1=createSprite(displayWidth-150,40)
   heart1.visible=false
   heart1.addImage(heart1Img)
   heart1.scale=0.4
 
   heart2=createSprite(displayWidth-100,40)
   heart2.visible=false
   heart2.addImage(heart2Img)
   heart2.scale=0.4
   
   heart3=createSprite(displayWidth-150,40)
   heart3.addImage(heart3Img)
   heart3.scale=0.4
   
   


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
