import Lenis from "@studio-freight/lenis";

class SmoothScroller {
  lenis: Lenis | null = null;

  constructor() {
    this.init();
  }

  private init() {
    this.lenis = new Lenis();

    requestAnimationFrame(this.raf.bind(this));
  }

  raf(time: number) {
    if (!this.lenis) return;
    this.lenis.raf(time);
    requestAnimationFrame(this.raf.bind(this));
  }
}

export default SmoothScroller;
