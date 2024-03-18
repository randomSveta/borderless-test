import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`, // Optional: Import your global SCSS file
      },
    },
  },
  build: {
    outDir: "dist",
  },
  base: "/borderless-test",
});
