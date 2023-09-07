import Cat from "./Cat.js";
const catCanvas = document.getElementById("cat");
const enemyCanvas = document.getElementById("enemy");
const cat = new Cat(catCanvas, 7);
let isAlive = setInterval(() => {
	let catTop = parseInt(window.getComputedStyle(catCanvas).top);
	let enemyLeft = parseInt(window.getComputedStyle(enemyCanvas).left);
	if (enemyLeft < 50 && catTop > 245) {
		alert("game-over");
	}
}, 10);
function animate() {
	cat.draw();
	requestAnimationFrame(animate);
}

//evene listener

window.addEventListener("keydown", (e) => {
	cat?.update(e.key);
});

//functions
function type(i, t, ie, oe) {
	const input = document.getElementById(ie).innerHTML;
	document.getElementById(oe).innerHTML += input.charAt(i);
	setTimeout(function () {
		i < input.length - 1 ? type(i + 1, t, ie, oe) : false;
	}, t);
}

type(0, 100, "rules", "text-wrapper");
type(0, 100, "rules2", "text2-wrapper");
animate();
