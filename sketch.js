var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	var op  = {
		isStatic:true
	}
	engine = Engine.create();
	world = engine.world;
      star = Bodies.circle(700, 100, 40, op)
      World.add(world, star)




	/*star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , op);
	World.add(world, starBody);
	console.log(star.y)
	*/Engine.run(engine);
	

}


function draw() {
  background(bgImg);
image(starImg, star.position.x, star.position.y, 50,50)


if(star.position.y >= fairy.y-40){
	Matter.Body.setStatic(star, true)
}

  drawSprites();

}

function keyPressed() {
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(star, false)

	}
	if(keyCode === RIGHT_ARROW){
       fairy.x =fairy.x + 15
	  
	}
	if(keyCode === LEFT_ARROW){
		fairy.x =fairy.x  -15
	   
	 }
	
}
