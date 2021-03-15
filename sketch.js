var cat1,cat2,cat3,cat4,catGroup;
var garden;
var mouse1,mouse2,mouse3,mouse4,mouseGroup;

function preload() {
    //load the images here
  cat1 = loadImage("cat1.png");
  cat2 = loadImage("cat2.png");
  cat3 = loadImage("cat3.png");
  cat4 = loadImage("cat4.png");
  mouse1 = loadImage("mouse1.png");
  mouse2 = loadImage("mouse2.png");
  mouse3 = loadImage("mouse3.png");
  mouse4 = loadImage("mouse4.png");
  garden = loadImage("garden.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
