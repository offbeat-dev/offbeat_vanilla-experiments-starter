import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/globals.scss";
import "./styles.css";

const content = document.querySelector(".content");
const mainSection = document.querySelector(".main-section");
const lenis = new Lenis({
  lerp: 0.5,
});
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: mainSection,
    start: "center center",
    end: "center start",
    scrub: 2,
  },
});

tl.to(content, {
  yPercent: -10,
  ease: "none",
});

// const tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: mainSection,
//     start: "top top",
//     end: "+=100%",
//     scrub: 5,
//   },
// });

// tl2.to(
//   mainSection,
//   {
//     scale: 5,
//   },
//   0
// );

// tl2.to(
//   mainSection,
//   {
//     opacity: 0,
//   },
//   0.5
// );
