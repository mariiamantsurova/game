export default class Cat {
	constructor(canvas, staggerFrame) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.image = new Image();
		this.image.src = "./src/cat.png";
		this.canvasWidth = 260;
		this.canvasHeight = 150;
		this.spriteWidth = 333;
		this.spriteHeight = 299;
		this.frameX = 0;
		this.maxFramesX = 5;
		this.frameY = 0;
		this.gameFrame = 0;
		this.staggerFrame = staggerFrame;
		this.isPlaying = false;
	}
	draw() {
		this.ctx.clearRect(0, 0, this.spriteWidth, this.spriteHeight);
		this.ctx.drawImage(
			this.image,
			this.frameX * this.spriteWidth,
			this.frameY * this.spriteHeight,
			this.spriteWidth,
			this.spriteHeight,
			20,
			0,
			this.canvasWidth,
			this.canvasHeight,
		);
		if (this.gameFrame % this.staggerFrame == 0) {
			if (this.frameX < this.maxFramesX) this.frameX++;
			else this.frameX = 0;
		}
		this.gameFrame++;
	}
	update(key) {
		if (key === "Enter") {
			if (this.frameY !== 1) {
				this.frameY = 1;
				this.maxFramesX = 2;
				this.isPlaying = true;
				const environment = document.getElementById("environment");
				environment.classList.add("playing");
			}
		} else if (key === " " && this.isPlaying) {
			if (this.frameY !== 2 && !this.canvas.classList.contains("jump")) {
				this.frameY = 2;
				this.maxFramesX = 2;
				this.canvas.classList.add("jump");
				play();
				setTimeout(() => {
					this.canvas.classList.remove("jump");
					this.frameY = 1;
				}, 500);
			}
		}
	}
}
function play() {
	const audio = document.getElementById("jump");
	audio.play();
	audio.currentTime = 0;
}
