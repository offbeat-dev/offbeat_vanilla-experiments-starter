import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        "01-scrolltrigger-scrub": resolve(
          __dirname,
          "src/01-scrolltrigger-scrub/index.html"
        ),
        "02-threejs-polygons": resolve(
          __dirname,
          "src/02-threejs-polygons/index.html"
        ),
        "03-react-starter": resolve(
          __dirname,
          "src/03-react-starter/index.html"
        ),
        "04-react-unstated-counter": resolve(
          __dirname,
          "src/04-react-unstated-counter/index.html"
        ),
        "05-react-random-color-generator": resolve(
          __dirname,
          "src/05-react-random-color-generator/index.html"
        ),
      },
    },
  },
});
