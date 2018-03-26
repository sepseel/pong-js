function Paddle(x) {
	this.y = floor(height / 2);
	this.x = x;
	this.upvel = 0;
	this.downvel = 0;
	
	this.update = function() {
		if (this.y > 0) {
			this.y += this.upvel;
		} 
	 if (this.y < height) {
			this.y += this.downvel;
		}
	}
	
	this.draw = function() {
		noStroke();
		fill(color(255, 0, 0));
		rectMode(RADIUS);
		rect(this.x, this.y, 5, 50);
	}
	
	this.dir = function(upvel, downvel) {
		this.upvel = upvel;
		this.downvel = downvel;
	}
}
