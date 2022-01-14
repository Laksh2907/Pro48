var form,system,code,security;
var score=0;
var winnerImg;

function preload() {
 winnerImg=loadImage("treasure.jpg");
 bg=loadImage("images.jpg");
}
function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

}
function draw() {
  background(bg);
  clues();
  security.display();
if (score===6){
  background(winnerImg);
  textSize(30)
  stroke(40)
  fill("black")
  text("Hurray! You have completed the ultimate coding quiz!",100,250)
}
  textSize(40);
  fill("red");
  text("Score: " + score, 380, 50);

  drawSprites();
}