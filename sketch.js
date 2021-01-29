var sword;
var swordImg;
var fruit1,fruit2,fruit3,fruit4;
var fruit;
var rand;
var fruitGroup;
var monster;
var monsterImg;
var enemyGroup;
var score;
var PLAY=1;
var END=0;
var gamestate=1;
var  gameOverImg;


function preload(){
  swordImg=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  monsterImg=loadImage("alien1.png","alien2.png");
  gameOverImg=loadImage("gameover.png");
}

function setup(){
  createCanvas(600,600);
  sword=createSprite(40,200,40,40);
  sword.addImage(swordImg);
  sword.scale=0.7;
  score=0;
  sword.setCollider("rectangle",0,0,40,40)
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
  
  
}


function draw(){
  background("lightBlue");
  if(gamestate===PLAY){
  sword.x=World.mouseX;
    sword.y=World.mouseY;
  fruits();
  enemys();
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+1;
  }
    else{
      if (enemyGroup.isTouching(sword)){
        gamestate=END;
        fruitGroup.destroyEach();
        enemyGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        enemyGroup.setVelocityXEach(0);
        sword.addImage(gameOverImg);
        sword.x=200;
        sword.y=200;
          }
          
    }
  }
  
  
  drawSprites();
  text(" SCORE "+score,300,30);
  

}
function fruits(){
  if(World.frameCount%60===0){
    fruit=createSprite(400,200,20,20);
    rand=Math.round(random(1,4))
  if(rand==1){
      fruit.addImage(fruit1)
  }
      else if(rand==2){
        fruit.addImage(fruit2)
      }
        else if(rand==3){
          fruit.addImage(fruit3)
        }
          else {
            fruit.addImage(fruit4)
          }
     fruit.scale=0.2;
    fruit.y=Math.round(random(50,350))
    fruit.velocityX=-7;
    fruit.setLifetime=50;
    
    fruitGroup.add(fruit);
        }
      
}



  function enemys(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImg)
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }

  
  
}







