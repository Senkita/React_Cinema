import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
  base: "./",
  publicDir: "../",
  server: {
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "http://localhost:2333",
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
