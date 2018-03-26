var bounced = false;
var lscore = 0;
var rscore = 0;

function setup() {
  // runs once on startup
  createCanvas(600, 400);
  frameRate(100);
  b = new Ball(1);
  L = new Paddle(50);
  R = new Paddle(550);
  
}

function draw() {
  // repeats every frame
  background(50);
  
  textSize(32);
  fill(255);
	text(lscore, 10, 30);
	text(rscore, width-50, 30);
  
  L.update();
  R.update();
  b.checkColission(R);
  b.checkColission(L);
  b.update();
  L.draw();
  R.draw();
	b.draw();
}

function restart(dir) {
	b = new Ball(dir);
  L = new Paddle(50);
  R = new Paddle(550);
  bounced = false;
}


function keyPressed() {
	if (keyCode === 80) {
		R.dir(-5, 0);
	} else if (keyCode === 77) {
		R.dir(0, 5);
	} 
	if (keyCode === 65) {
		L.dir(-5, 0);
	} else if (keyCode === 81) {
		L.dir(0, 5);
	}

}

function keyReleased() {
	if (keyCode === 80) {
		R.dir(0, 0);
	} else if (keyCode === 77) {
		R.dir(0, 0)
	} 
	if (keyCode === 65) {
		L.dir(0, 0);
	} else if (keyCode === 81) {
		L.dir(0, 0)
	}
	
}
