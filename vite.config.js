import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "01-scrolltrigger-scrub": resolve(
          __dirname,
          "pages/01-scrolltrigger-scrub/index.html"
        ),
        "02-threejs-polygons": resolve(
          __dirname,
          "pages/02-threejs-polygons/index.html"
        ),
        "03-react-starter": resolve(
          __dirname,
          "pages/03-react-starter/index.html"
        ),
        "04-react-unstated-counter": resolve(
          __dirname,
          "pages/04-react-unstated-counter/index.html"
        ),
      },
    },
  },
});
