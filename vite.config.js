import { mergeDeepRight } from "ramda";
import { alias } from "./config/build/config";
import { define, entryPoints, extensions } from "./config/build/constants";
import svgr from "vite-plugin-svgr";
const postCssConfig = require("./postcss.config");

const port = process.env.DEVSERVER_PORT || 8000;

const config = {
  assetsInclude: ["**/*.yaml"],
  css: { postcss: postCssConfig },
  server: { port, origin: `http://localhost:${port}` },
  build: {
    outDir: "public/assets",
    manifest: true,
    sourcemap: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: entryPoints,
    },
  },
  root: "app/javascript/packs",
  resolve: {
    alias,
    extensions,
  },
  define,
  plugins: [
    svgr({
      svgrOptions: { exportType: "default" },
      include: "**/*.svg",
    }),
  ],
};

export default config;
