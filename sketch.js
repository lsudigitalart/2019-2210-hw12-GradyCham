var counter = 15;
var guy = [];
var total = 0;
var winsong;
var boo;
var eek;
function preload(){
	green = new Walker(50, 50, "Green.png"); //created an object of a class
	for (var i = 0; i < counter; i++){
	guy[i] = new Walker (random(500), random(90, 430), "splunkyGuy.png", random([-1, +1]));
		green[i] = new Walker (random(500), random(90, 430), "Green.png", random([-1, +1]));
	}
	winsong = loadSound("MonstaMash.mp3");
	boo = loadSound("boo.mp3");
	eek = loadSound("eek.mp3");
}

function setup(){
	createCanvas(640,480);
	imageMode(CENTER);
	
	
}
function PlaySong(){
	
}
function draw (){
	background(60, 128,0);
	if (total == counter* 2){
		background (150, 90, 0);
		
	}
	for (var i = 0; i < counter; i++){
		guy[i].draw();
		green[i].draw();
		
		
	}
	textSize(20);
	text("Click on People to Turn Them Into Ghosts!", 20, 20);
	textSize(35);
	text ("Score: " + total, 420, 30);


}


function mousePressed(){
	for (var i = 0; i < counter; i ++){
		guy[i].grab(mouseX, mouseY);
		green[i].grab(mouseX, mouseY);
		
		winsong.pause();
		//total = guy[i].score + green[i].score;
		if (total == counter * 2){
		winsong.play();
	}
	}
}

function mouseReleased(){
	for (var i = 0; i < counter; i ++){
		guy[i].drop(mouseX, mouseY);
		green[i].drop(mouseX, mouseY);

		
	}
}
function Walker (x, y, imageName, moving){
	this.spritSheet;
	this.x = x;
	this.y = y;
	this.frame = 0;
	this.moving = moving;
	this.facing = moving;
	this.spritSheet = loadImage(imageName);
	this.ghost = -1;
	this. draw = function(){
		
		push();
		translate(this.x,this.y);
		if(this.facing < 0){
			scale(-1.0,1.0);
		}
		if (this.ghost == -1){
		if(this.moving == 0){
			image(this.spritSheet, 0, 0, 80, 80, 0, 0, 80, 80);
		}
		else{
			if(this.frame == 0){
				image(this.spritSheet, 0, 0, 80, 80, 80, 0, 80, 80);
			}
			if(this.frame == 1){
				image(this.spritSheet, 0, 0, 80, 80, 160, 0, 80, 80);
			}
			if(this.frame == 2){
				image(this.spritSheet, 0, 0, 80, 80, 240, 0, 80, 80);
			}
			if(this.frame == 3){
				image(this.spritSheet, 0, 0, 80, 80, 320, 0, 80, 80);
			}
			if(this.frame == 4){
				image(this.spritSheet, 0, 0, 80, 80, 400, 0, 80, 80);
			}
			if(this.frame == 5){
				image(this.spritSheet, 0, 0, 80, 80, 480, 0, 80, 80);
			}
			if(this.frame == 6){
				image(this.spritSheet, 0, 0, 80, 80, 560, 0, 80, 80);
			}
			if(this.frame == 7){
				image(this.spritSheet, 0, 0, 80, 80, 640, 0, 80, 80);
			}

			if(frameCount % 2 == 0){
				this.frame = (this.frame + 1) % 8;
				this.x = this.x + 6 * this.moving;//boundaries
				if (this.x < 30){
					this.moving = +1;
					this.facing = +1;
				}
				if (this.x> width-30) {
					this.moving = -1;
					this.facing = -1;
				}
				}
			}
		}
		if (this.ghost == 1){
			if(this.moving == 0){
			image(this.spritSheet, 0, 0, 80, 80, 0, 800, 80, 80);
			}
		 else{
			if(this.frame == 0){
				image(this.spritSheet, 0, 0, 80, 80, 80, 800, 80, 80);
			}
			if(this.frame == 1){
				image(this.spritSheet, 0, 0, 80, 80, 160, 800, 80, 80);
			}
			if(this.frame == 2){
				image(this.spritSheet, 0, 0, 80, 80, 240, 800, 80, 80);
			}
			if(this.frame == 3){
				image(this.spritSheet, 0, 0, 80, 80, 320, 800, 80, 80);
			}
			if(this.frame == 4){
				image(this.spritSheet, 0, 0, 80, 80, 400, 800, 80, 80);
			}
			if(this.frame == 5){
				image(this.spritSheet, 0, 0, 80, 80, 480, 800, 80, 80);
			}
			if(this.frame == 6){
				image(this.spritSheet, 0, 0, 80, 80, 560, 800, 80, 80);
			}
			if(this.frame == 7){
				image(this.spritSheet, 0, 0, 80, 80, 640, 800, 80, 80);
			}
			 if(this.frame == 8){
				image(this.spritSheet, 0, 0, 80, 80, 720, 800, 80, 80);
			}

			if(frameCount % 6 == 0){
				this.frame = (this.frame + 1) % 8;
				this.x = this.x + 6 * this.moving;//boundaries
				if (this.x < 30){
					this.moving = +1;
					this.facing = +1;
				}
				if (this.x> width-30) {
					this.moving = -1;
					this.facing = -1;
				}
				}
			}
			
		}
			pop();
	}
	this.go = function(direction){
		this.moving = direction;
		this.facing = direction;
		
	}
	this.stop = function(){
		this.moving = 0;
		this.frame = 3;
		
	}
	this.grab = function(x,y){
		if(this.x -30 < x && x < this.x + 30 &&this.y-30 < y && y<this.y+30){
			this.stop();
			this.mouseX = x;
			this.mouseY = y;
			this.initialX = this.x;
			this. initialY = this.y;
			if (this.ghost == -1){
				boo.play();
			}
			if (this.ghost == 1){
				eek.play();
			}
			this.ghost *= -1;
			total += this.ghost;

		}
	}

	this.drop = function(x,y){
		this.go(this.facing);

	}
}