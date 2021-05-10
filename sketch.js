var canvas;
var music;
var wall1,wall2,wall3,wall4
var surface1,surface2,surface3,surface4,box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(100,550,100,30)
surface1.shapeColor="red"

surface2=createSprite(300,550,100,30)
surface2.shapeColor="blue"
surface3=createSprite(500,550,100,30)
surface3.shapeColor="green"
surface4=createSprite(700,550,100,30)
surface4.shapeColor="yellow"
    //create box sprite and give velocity
box=createSprite(450,100,50,50)
box.shapeColor="white"
box.velocityX=10
box.velocityY=10
wall1=createSprite(10,400,10,620)
wall2=createSprite(400,10,820,10)
wall3=createSprite(780,300,10,620)
wall4=createSprite(400,580,820,10)
}

function draw() {
    background(rgb("black"));
    box.bounceOff(surface1)
    //create edgeSprite
    box.bounceOff(wall1)
    box.bounceOff(wall2)
    box.bounceOff(wall3)
    box.bounceOff(wall4)

drawSprites();

//add condition to check if box touching surface and make it box
if(surface1.isTouching(box)&&box.bounceOff(surface1)){
    box.shapeColor="red"
}

if(surface2.isTouching(box)&&box.bounceOff(surface2)){
    box.shapeColor="blue"
}

if(surface3.isTouching(box)&&box.bounceOff(surface3)){
    box.shapeColor="green"
}

if(surface1.isTouching(box)&&box.bounceOff(surface1)){
    box.shapeColor="yellow"
}




}
