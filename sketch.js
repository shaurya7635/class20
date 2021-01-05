var cat , mouse , background ;
var cat_Running , mouse_Running;
var backgroundImage, catImage , mouseImage;
var cat_Collided, mouse_Collided;

function preload() {
    
backgroundImage = loadImage("garden.png");
catImage = loadImage("tomOne.png");
mouseImage = loadImage("jerryOne.png");

    cat_Running = loadAnimation("tomTwo.png", "tomThree.png" );
    mouse_Running = loadAnimation("jerryTwo.png", "jerryThree.png");
        
    

    cat_Collided = loadAnimation("tomFour.png");
    mouse_Collided = loadAnimation("jerryFour.png");

    
}

function setup(){
    createCanvas(1000,800);
    
    background = createSprite(500,375,1000,800);
    background.addImage(backgroundImage);
    background.scale = 1.0;

    cat = createSprite(800,400,30,30);
    cat.addImage( catImage);
    cat.scale = 0.2;
    
    mouse = createSprite(100,625,30,30);
    mouse.addImage(mouseImage);
    mouse.scale = 0.2;

    mouse.setCollider("rectangle",0,0,10,10);
    mouse.debug = true;

    

}

function draw() {

    if(cat.isTouching(mouse)){
        
        cat.addAnimation("catLastImage", cat_Collided);
        cat.changeAnimation("catLastImage");
         cat.velocityX = 0
         cat.velocityY = 0
        
        mouse.addAnimation("mouseLastImage", mouse_Collided);
         mouse.changeAnimation("mouseLastImage");}
        
    
        
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("cat running", cat_Running)
      cat.changeAnimation("cat running");

      mouse.addAnimation("mouse Running", mouse_Running);
      mouse.changeAnimation("mouse Running");
      
  }

  if(keyCode === RIGHT_ARROW){
    cat.velocityX = 5;
    cat.addAnimation("cat running", cat_Running)
      cat.changeAnimation("cat running");

      mouse.addAnimation("mouse Running", mouse_Running);
      mouse.changeAnimation("mouse Running");
    
    
}

if(keyCode === UP_ARROW){
    cat.velocityY = -5;
    cat.addAnimation("cat running", cat_Running)
      cat.changeAnimation("cat running");

      mouse.addAnimation("mouse Running", mouse_Running);
      mouse.changeAnimation("mouse Running");
    
}

if(keyCode === DOWN_ARROW){
    cat.velocityY = 5;
    cat.addAnimation("cat running", cat_Running)
      cat.changeAnimation("cat running");

      mouse.addAnimation("mouse Running", mouse_Running);
      mouse.changeAnimation("mouse Running");
    
    
}

}
