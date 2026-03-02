import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  build: {
    rollupOptions: { input: "./index.html" },
  },
  plugins: [injectHTML(), FullReload(["src/**/*.{html,css,js}"])],
  server: {
    watch: {
      usePolling: true,
    },
  },
  css: {
    devSourcemap: true,
  },
});
