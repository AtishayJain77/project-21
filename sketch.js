var music;
var gameObj1, gameObj2, gameObj3, gameObj4;
var cube;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    createCanvas(800,600);
     edges = createEdgeSprites();
    cube = createSprite(Math.round(random(20,750),30,2,2));
    cube.shapeColor = "white";
    cube.debug = true;
    //create 4 different surfaces
    gameObj1 = createSprite(100,580,100,20);
    gameObj2 = createSprite(300,580,100,20);
    gameObj3 = createSprite(500,580,100,20);
    gameObj4 = createSprite(700,580,100,20);

    gameObj1.shapeColor = "red";
    gameObj2.shapeColor = "green";
    gameObj3.shapeColor = "blue";
    gameObj4.shapeColor = "orange";
    



    //create box sprite and give velocity
    cube.velocityY = -3;
    cube.velocityX = 4;
   
}

function draw() {
    background(rgb(169,169,169));

    cube.bounceOff(edges[0]);
    cube.bounceOff(edges[1]);
    cube.bounceOff(edges[2]);
    cube.bounceOff(edges[3]);
    
    if(cube.isTouching(gameObj1)){
        cube.velocityX = 0;
        cube.velocityY = 0;
        cube.shapeColor = "red";
        music.play();
    }

    if(cube.isTouching(gameObj2)){
        cube.shapeColor = "green";
        cube.bounceOff(gameObj2)
        music.play();
       
    }

    if(cube.isTouching(gameObj3)){
        cube.bounceOff(gameObj3)
        music.play();
        cube.shapeColor = "blue";

    }

    if(cube.isTouching(gameObj4)){
        cube.bounceOff(gameObj4)
        music.play();
        cube.shapeColor = "orange";
    }
    

    drawSprites();



 
}
