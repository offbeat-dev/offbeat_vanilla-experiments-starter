import "../styles/globals.scss";
import "./styles.css";
import * as THREE from "three";
import SmoothScroller from "./SmothScroller";

let scroll = 0;
const scroller = new SmoothScroller();
scroller.lenis?.on("scroll", (e) => {
  //normalize scroll between 0 and 1
  scroll = e.animatedScroll / window.innerHeight;
});
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
const x = 5,
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
camera.position.y = 0;
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
canvasContainer.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  mesh.position.z = -10 * scroll;
  renderer.render(scene, camera);
}
animate();
