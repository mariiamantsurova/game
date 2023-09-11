export default class Enemy {
	constructor(canvas, staggerFrame) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.image = new Image();
		this.image.src = "./src/enemy.png";
		this.canvasWidth = 300;
		this.canvasHeight = 160;
		this.spriteWidth = 1000;
		this.spriteHeight = 998;
		this.frameX = 0;
		this.maxFramesX = 1;
		this.gameFrame = 0;
		this.staggerFrame = staggerFrame;
	}
	draw() {
		this.ctx.clearRect(0, 0, this.spriteWidth, this.spriteHeight);
		this.ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 0, 0, this.canvasWidth, this.canvasHeight);
		if (this.gameFrame % this.staggerFrame == 0) {
			if (this.frameX < this.maxFramesX) this.frameX++;
			else this.frameX = 0;
		}
		this.gameFrame++;
	}
	update(key) {
		if (key === "Enter") {
			2;
			this.draw();
			this.canvas.classList.add("moving");
		}
	}
}
