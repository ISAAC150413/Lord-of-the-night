
var canvas;

var ball ;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage; 
var obstaclesGroup, obstacle1Image, obstacle2Image;
var arboll,arboll2,arboll3,arbol4;
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var ground, groundImage, invisibleGround;
var r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,r41,r42,r43,r44,r45,r46;
var pasos2Sound,pasos1Sound,latigoSound,cadenasSound;
var arbusto,arbusto2,arbusto3;
var car9,car10,car11;
var allPlayers, car1, car43,car44,car45,car46,car2,car12,car5,car6,car7,car13,car14,car15,car16,car17,car18,car20,car21,car22,car19,fuels, powerCoins, obstacles; 
var cars = [];
var obstacle2,obstacle3,obstacle4;
var score;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  arboll_img = loadImage ("arboll.png");
  arboll3_img = loadImage ("arboll3.png");
  arboll2_img = loadImage ("arboll2.png");
  arbusto_img = loadImage ("arbusto.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
 
  cadenasSound = loadSound("cadenas.mp3")
  latigoSound = loadSound("latigo.mp3")

  ambienteSound = loadSound("ambiente.mp3")
  pasos1Sound = loadSound("pasos1.mp3")

  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png"); 
  obstacle2Image = loadImage("./assets/obstacle2.png"); 
  obstacle3Image = loadImage("./assets/obstacle3.png"); 

  groundImage = loadImage("./assets/ground2.png")

  blastImage = loadImage ("./assets/blast.png"); //C42 //SA
  car12Image = loadImage ("./assets/car12.png");
  car13Image = loadImage ("./assets/car13.png");
  car14Image = loadImage ("./assets/car14.png");
  car15Image = loadImage ("./assets/car15.png");
  car16Image = loadImage ("./assets/car16.png");

  car5Image = loadAnimation ("car5.png","car6.png","car7.png");
  car6Image = loadAnimation ("car9.png","car10.png","car11.png");
  car7Image = loadAnimation ("car17.png","car18.png","car19.png");
  car8Image = loadAnimation ("car20.png","car21.png","car22.png");
  car43Image = loadAnimation ("r31.png","r32.png","r33.png","r34.png","r35.png")
  car44Image = loadAnimation ("r36.png","r37.png","r38.png","r39.png","r40.png")
  car45Image = loadAnimation ("r41.png","r42.png","r43.png")
  car46Image = loadAnimation ("r44.png","r45.png","r46.png")
}

function setup() {
  ground = createSprite(200,560,100,50);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2 ;
   // ambienteSound.loop()
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
 obstaclesGroup = createGroup();
 obstacles2Group = createGroup();
 obstacles3Group = createGroup();
 obstacles4Group = createGroup();
 
  //invisibleGround = createSprite(200,500,700,10);
  //invisibleGround.visible = true;

  
    
  
  


}

function draw() {
  background(backgroundImage);
  spawnObstacles();
  spawnObstacles2();
  spawnObstacles3();
  spawnObstacles4();
 
    createSprite
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  
  //arboll = createSprite(90,360,20,50);
  //arboll.addImage("arboll,",arboll_img);
  //arboll.scale = 2;

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();

  }
 // obstaclesPositions.lifetime = 5;
 //car1.collide(invisibleGround);
 
  
 ground.velocityX = -(4 + 3/100)
 
 if (ground.x < 0){
  ground.x = ground.width/2;
}
if(obstaclesGroup.collide(car1)){
  obstaclesGroup.destroyEach();
  player.score += 2;
 }

if(obstacles2Group.collide(car1)){
  obstacles2Group.destroyEach();
  player.score += 2;
 }
 if(obstacles3Group.collide(car1)){
  obstacles3Group.destroyEach();
  player.score += 2;
 }
 if(obstaclesGroup.collide(car1)){
  obstaclesGroup.destroyEach();
  player.score += 2;
 }

if(obstacles2Group.collide(car2)){
  obstacles2Group.destroyEach();
  player.score += 2;
 }
 if(obstacles3Group.collide(car2)){
  obstacles3Group.destroyEach();
  player.score += 2;
 }if(obstaclesGroup.collide(car2)){
  obstaclesGroup.destroyEach();
  player.score += 2;
 }

if(obstacles2Group.collide(car2)){
  obstacles2Group.destroyEach();
  player.score += 2;
 }
 if(obstacles3Group.collide(car2)){
  obstacles3Group.destroyEach();
  player.score += 2;
 }
 if (score = 10){
 

 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function spawnObstacles(){
  if (frameCount % 30 === 0){
    var obstacle = createSprite(640,300,10,40);
    obstacle.velocityX = -(6 /100);
    
    
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1Image);
               break;
       
       
        
       default: break;
     }
    
           
     obstacle.scale = 0.3;
     obstacle.lifetime = 100;
 
     obstaclesGroup.add(obstacle);
  }
 }
 function spawnObstacles2(){
  if (frameCount % 30 === 0){
    var obstacle2 = createSprite(700,400,10,40);
    obstacle2.velocityX = -(6 /100);
    
    
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 2: obstacle2.addImage(obstacle2Image);
               break;
       
       
        
       default: break;
     }
    
           
     obstacle2.scale = 0.3;
     obstacle2.lifetime = 100;
 
     obstacles2Group.add(obstacle2);
  }
 }
 function spawnObstacles4(){
  if (frameCount % 30 === 0){
    var obstacle4 = createSprite(700,200,10,40);
    obstacle4.velocityX = -(6 /100);
    
    
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 4: obstacle4.addImage(obstacle2Image);
               break;
       
       
        
       default: break;
     }
    
           
     obstacle4.scale = 0.3;
     obstacle4.lifetime = 100;
 
     obstacles4Group.add(obstacle4);
  }
 }
 function spawnObstacles3(){
  if (frameCount % 30 === 0){
    var obstacle3 = createSprite(780,490,10,40);
    spawnObstacles3.velocityX = -(6 /100);
    
    
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 3: obstacle3.addImage(obstacle3Image);
               break;
       
       
        
       default: break;
     }
    
           
     obstacle3.scale = 0.3;
     obstacle3.lifetime = 100;
 
     obstacles3Group.add(obstacle3);
  }
 }
 