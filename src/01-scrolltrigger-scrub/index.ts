import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/globals.scss";

gsap.registerPlugin(ScrollTrigger);
const content = document.querySelector(".content");
const mainSection = document.querySelector(".main-section");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: mainSection,
    start: "top top",
    end: "+=100%",
    scrub: 5,
  },
});

tl.to(content, {
  yPercent: -100,
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
