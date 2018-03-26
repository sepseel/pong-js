function Ball(dir) {
	this.lscore = 0;
	this.rscore = 0;
	this.r = 10
	this.x = 300 + 200*-1*dir;
	this.y = 200;
	this.xvel = 7 * dir;
	this.yvel = random(-6, 7);
	
	this.update = function() {
		this.x += this.xvel;
		this.y += this.yvel;
		if (this.x + this.r >= width-1 || this.x + this.r <= 2*this.r+1) {this.xvel *= -1;}
	  if (this.y + this.r >= height-1 || this.y + this.r <= 2*this.r+1) {this.yvel *= -1;}
	}
	
	this.draw = function() {
		noStroke();
		fill(color(0, 0, 255));
		ellipse(this.x, this.y, this.r*2);
		
	}
	
	this.checkColission = function(paddle) {
	let px = paddle.x;
	let py = paddle.y;
	let bx = this.x;
	let by = this.y;
	
	if (px == 50 && px - bx > -20) {
		if (!(by > py-70 && by < py+70)) {
			if (bounced) {
				rscore += 1
			}
			restart(1);
		} else {
			let d = dist(px, py-50, bx, by);
			this.bounce(d);
			bounced = true;
		}
	} else if (px == 550 && px - bx < 20) {
		if (!(by > py-70 && by < py+70)) {
			if (bounced) {
				lscore += 1
			}
			restart(-1);
		} else {
			let d = dist(px, py-50, bx, by);
			this.bounce(d);
			bounced = true
		}
	}
}
	
	this.bounce = function(d) {
		let angle = map(d, 0, 107, -6, 6);
		this.xvel *= -1;
		this.yvel = angle;
	}
}
