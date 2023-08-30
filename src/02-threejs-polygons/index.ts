import "./styles.css";
import * as THREE from "three";

const canvasContainer = document.querySelector(
  ".canvas-container"
) as HTMLElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const x = 0,
  y = 0;

const triangleShape = new THREE.Shape();
triangleShape.moveTo(x, y);
triangleShape.lineTo(x - 1, y + 1);
triangleShape.lineTo(x - 1, y);
triangleShape.closePath();

const geometry = new THREE.ShapeGeometry(triangleShape);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.5,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
canvasContainer.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
