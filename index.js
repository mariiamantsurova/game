import Cat from "./Cat.js";
const catCanvas = document.getElementById("cat");
const enemyCanvas = document.getElementById("enemy");
const cat = new Cat(catCanvas, 7);
let request;

//functions
let isAlive = setInterval(() => {
	let catTop = parseInt(window.getComputedStyle(catCanvas).top);
	let enemyLeft = parseInt(window.getComputedStyle(enemyCanvas).left);
	if (enemyLeft < 150 && catTop > 230) {
		gameOver();
		clearInterval(isAlive);
	}
}, 10);
function animate() {
	cat.draw();
	request = window.requestAnimationFrame(animate);
}
function stopAnimation() {
	window.cancelAnimationFrame(request);
}
function gameOver() {
	stopAnimation();
	pauseAnimation("enemy");
	pauseAnimation("environment");
	window.removeEventListener("keydown", update);
	showModal();
}
function showModal() {
	let img = document.createElement("img");
	img.src = "./src/modal.png";
	img.classList.add("modal-img");
	let h1 = document.createElement("h1");
	h1.textContent = "Game Over";

	let button = document.createElement("button");
	let btnImage = document.createElement("img");
	btnImage.src = "./src/button.png";
	button.appendChild(btnImage);
	button.classList.add("refresh-btn");
	button.addEventListener("click", (e) => {
		document.location.reload();
	});

	let src = document.getElementById("modal");
	let buttonRefresh = document.getElementById("refresh-btn-container");
	src.appendChild(img);
	src.appendChild(h1);
	buttonRefresh.appendChild(button);
}
function pauseAnimation(element) {
	const domElement = document.getElementById(`${element}`);
	domElement.style.animationPlayState = "paused";
}
const update = (e) => {
	cat?.update(e.key);
};
//event listener

window.addEventListener("keydown", update);

//functions
function type(i, t, ie, oe) {
	const input = document.getElementById(ie).innerHTML;
	document.getElementById(oe).innerHTML += input.charAt(i);
	setTimeout(function () {
		i < input.length - 1 ? type(i + 1, t, ie, oe) : false;
	}, t);
}
async function typeAll() {
	type(0, 100, "rules", "text-wrapper");
	type(0, 100, "rules2", "text2-wrapper");
}
typeAll();
animate();
