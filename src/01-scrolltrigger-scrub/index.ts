import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/globals.scss";
import "./styles.css";

const content = document.querySelector(".content");
const mainSection = document.querySelector(".main-section");

//lenis + gsap setup
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false,
  touchMultiplier: 2,
});
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

//gsap plugin registration + timeline definition
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  ease: "none",
  scrollTrigger: {
    trigger: mainSection,
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
  },
});
tl.to(content, {
  scale: 2,
  ease: "none",
});
