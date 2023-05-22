/** @format */
/*
gsap.to(".fire", {
	stagger: 1.5,
	x: 600,
	rotation: 360,
	duration: 3,
	yoyo: true,
	repeat: -1,
}); */

window.onload = function () {
	const canvas =
		document.getElementById("canvas");
	const context =
		canvas.getContext("2d");
	canvas.width = 400;
	canvas.height = 400;
	context.fillStyle = "#fac5b8";
	context.fillRect(
		0,
		0,
		canvas.width,
		canvas.height
	);
	for (let i = 0; i < 50; i += 1) {
		context.beginPath();
		context.moveTo(
			Math.random() * canvas.width,
			Math.random() * canvas.height
		);
		context.lineTo(
			Math.random() * canvas.width,
			Math.random() * canvas.height
		);
		context.stroke();
	}
};
