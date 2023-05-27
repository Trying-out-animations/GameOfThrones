/** @format */
import * as THREE from "./three.js-master/build/three.module.js";

const canvas =
	document.querySelector("#canvas");
canvas.width = 400;
canvas.height = 400;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(
	1,
	1,
	1
);
const material =
	new THREE.MeshBasicMaterial({
		color: "#73ad21",
	});

const boxMesh = new THREE.Mesh(
	geometry,
	material
);
scene.add(boxMesh);

const sizes = {
	width: canvas.width,
	height: canvas.height,
};

const camera =
	new THREE.PerspectiveCamera(
		75,
		sizes.width / sizes.height,
		0.1,
		100
	);

camera.position.set(0, 1, 2);

//Add the camera to the scene
scene.add(camera);

const renderer =
	new THREE.WebGL1Renderer({
		canvas: canvas,
	});

renderer.setSize(
	sizes.width,
	sizes.height
);
renderer.setPixelRatio(
	Math.min(window.devicePixelRatio, 2)
);
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;
renderer.render(scene, camera);
