
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1= loadImage("images/mouse1.png");
    catImg2= loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3= loadImage("images/cat4.png");
    mouseImg3= loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(100,600);
    mouse.addAnimation("ratoComQueijo", mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
      if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("ultimaImagemdoGato",catImg3);
        cat.changeAnimation("ultimaImagemdoGato");
        cat.x =300;
        cat.scale = 0.2;
        
        mouse.addAnimation("mouseComLupa",mouseImg3);
        mouse.changeAnimation("mouseComLupa");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("ratoProvocando",mouseImg2);
    mouse.changeAnimation("ratoProvocando");
    mouse.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation("gatoAndando", catImg2);
    cat.changeAnimation("gatoAndando");
 }
}
